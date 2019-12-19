import React from "react";
import { Button } from 'antd';

import { addWord, nWords } from "./textGenerator";
import Timer from "./Timer";
import UserInput from "./UserInput";
import Words from "./Words";
import { gameStates, makeStateTransition } from "./gameStates";
import Result from "./Result";

const wordsSize = 16;

function Game(props) {
  const [gameState, setGameState] = React.useState(gameStates.BEFORE);
  const [lower, setLower] = React.useState(0);
  const [targetWords, setTargetWords] = React.useState(() =>
    nWords(props.data, wordsSize)
  );
  const [progress, setProgress] = React.useState("");
  const [inputWords, setInputWords] = React.useState([]);
  const upper = lower + wordsSize;

  const setCount = n => {
    setLower(n);
    if (upper === targetWords.length) {
      setTargetWords(addWord(props.data, targetWords));
    }
  };

  const startGame = () =>
    makeStateTransition(
      gameStates.BEFORE,
      gameStates.DURING,
      setGameState,
      gameState
    );

  const endGame = () =>
    makeStateTransition(
      gameStates.DURING,
      gameStates.OVER,
      setGameState,
      gameState
    );

  const resetGame = () => {
    makeStateTransition(gameState, gameStates.BEFORE, setGameState, gameState);
    setLower(0);
    setTargetWords(nWords(props.data, wordsSize));
    setProgress("");
    setInputWords([]);
  };

  const addInputWord = word => {
    setInputWords(inputWords.concat([word]));
    setCount(inputWords.length + 1);
  };

  return (
    <div>
      <Timer gameState={gameState} endGame={endGame} />
      <br />
      <Words progress={progress} words={targetWords} range={[lower, upper]} />
      <br />
      <UserInput
        gameState={gameState}
        startGame={startGame}
        setProgress={setProgress}
        addInputWord={addInputWord}
      />
      <br />
      <Button type="primary" onClick={resetGame}>Reset</Button>
      <br />
      {gameState === gameStates.OVER && (
        <Result
          inputWords={inputWords}
          targetWords={targetWords.slice(0, lower)}
        />
      )}
    </div>
  );
}

export default Game;
