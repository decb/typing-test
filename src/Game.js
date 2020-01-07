import React from "react";
import { Button, Card, Col, Row } from "antd";

import { addWord, genWords } from "./wordsGenerator";
import Timer from "./Timer";
import UserInput from "./UserInput";
import Words from "./Words";
import { gameStates } from "./states";
import Result from "./Result";

const wordsSize = 16;

function Game(props) {
  const [gameState, setGameState] = React.useState(gameStates.BEFORE);
  const [lower, setLower] = React.useState(0);
  const [targetWords, setTargetWords] = React.useState(() =>
    genWords(props.data, wordsSize)
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

  const startGame = () => setGameState(gameStates.BEFORE);
  const endGame = () => setGameState(gameStates.OVER);

  const resetGame = () => {
    setGameState(gameStates.BEFORE);
    setLower(0);
    setTargetWords(genWords(props.data, wordsSize));
    setProgress("");
    setInputWords([]);
  };

  const addInputWord = word => {
    setInputWords(inputWords.concat([word]));
    setCount(inputWords.length + 1);
  };

  const rowMargin = { marginTop: "0.8rem" };
  return (
    <Card style={{ marginTop: "0.7rem" }}>
      <Row>
        <Card
          size="small"
          title="Words to type"
          style={{ width: "100%" }}
          extra={<Timer gameState={gameState} endGame={endGame} />}
        >
          <Words
            progress={progress}
            words={targetWords}
            range={[lower, upper]}
          />
        </Card>
      </Row>
      <Row style={rowMargin}>
        <Col xs={16} sm={16} md={20} lg={20} xl={20}>
          <UserInput
            gameState={gameState}
            startGame={startGame}
            setProgress={setProgress}
            addInputWord={addInputWord}
          />
        </Col>
        <Col xs={8} sm={8} md={4} lg={4} xl={4}>
          <Button
            type="primary"
            onClick={resetGame}
            style={{
              width: "100%",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0
            }}
          >
            Reset
          </Button>
        </Col>
      </Row>
      {gameState === gameStates.OVER && (
        <Row style={rowMargin}>
          <Result
            inputWords={inputWords}
            targetWords={targetWords.slice(0, lower)}
          />
        </Row>
      )}
    </Card>
  );
}

export default Game;
