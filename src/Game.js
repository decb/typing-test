import React from "react";

import { addWord, nWords } from "./textGenerator";
import Timer from "./Timer";
import UserInput from "./UserInput";
import Words from "./Words";
import { gameStates, makeStateTransition } from "./gameStates";

const wordsSize = 16;

function Game(props) {
  const [gameState, setGameState] = React.useState(gameStates.BEFORE);
  const [lower, setLower] = React.useState(0);
  const [words, setWords] = React.useState(() => nWords(props.data, wordsSize));
  const [progress, setProgress] = React.useState("");
  const upper = lower + wordsSize;

  const setCount = n => {
    setLower(n);
    if (upper === words.length) {
      setWords(addWord(props.data, words));
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

  return (
    <div>
      <Timer gameState={gameState} endGame={endGame} />
      <br />
      <Words progress={progress} words={words} range={[lower, upper]} />
      <br />
      <UserInput
        gameState={gameState}
        startGame={startGame}
        setCount={setCount}
        setProgress={setProgress}
      />
    </div>
  );
}

export default Game;
