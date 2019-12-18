module Main where

import Data.Aeson (encode)
import qualified Data.ByteString.Lazy.Char8 as BS
import Data.Char (isAlphaNum, isDigit, toLower)
import Data.List (intercalate)
import Data.List.Split (splitOn)
import qualified Data.Map as M
import System.Environment (getArgs)
import System.IO (readFile)

main :: IO ()
main = do
  args <- getArgs
  case args of
    [inFile, outFile] -> do
      args <- getArgs
      file <- readFile inFile
      dict <- lines <$> readFile "/usr/share/dict/words"
      let processed = process dict file
      let markov = generateMarkov processed
      let json = encode markov
      BS.writeFile outFile json
    _ -> putStrLn "Usage: generate-markov [input] [output]"

type Markov = M.Map String MarkovEntry

type MarkovEntry = (Int, M.Map String Int)

process :: [String] -> String -> [String]
process dict =
  filter validWord .
  map (filter isAlphaNum . map toLower) .
  concatMap words . lines . replace "--" " "
  where
    replace from to = intercalate to . splitOn from
    validWord word =
      (length word > 1 || word `elem` ["a", "i"]) && (not . all isDigit) word &&
      word `elem` dict

generateMarkov :: [String] -> Markov
generateMarkov xs = M.map numericise (go xs M.empty)
  where
    go (x:y:xs) res =
      go (y : xs) $
      if x `M.member` res
        then M.adjust (y :) x res
        else M.insert x [y] res
    go _ res = res
    numericise xs =
      M.mapAccum (\total wordLength -> (total + wordLength, total)) 0 $
      M.fromList $ map (\x -> (x, length $ filter (x ==) xs)) xs
