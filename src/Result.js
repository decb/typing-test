import React from "react";

function Result(props) {
  return (
    <div>
      INPUT: {props.inputWords}
      <br />
      WORDS: {props.words}
    </div>
  );
}

export default Result;
