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

type Markov a = M.Map a (M.Map a Int)

process :: [String] -> String -> [String]
process dict =
  filter validWord .
  map (filter isAlphaNum . map toLower) .
  concatMap words . lines . replace "--" " "
  where
    replace from to = intercalate to . splitOn from
    validWord word = (not . all isDigit) word && word `elem` dict

generateMarkov :: [String] -> Markov String
generateMarkov xs = M.map numericise (go xs M.empty)
  where
    go (x:y:xs) res =
      case M.lookup x res of
        Just ys -> go (y : xs) (M.adjust (y :) x res)
        Nothing -> go (y : xs) (M.insert x [y] res)
    go _ res = res
    numericise xs = M.fromList $ map (\x -> (x, length $ filter (x ==) xs)) xs
