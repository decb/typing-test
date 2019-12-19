import React from "react";

function Words(props) {
  const { progress, words, range } = props;
  const [lower, upper] = range;
  const first = words.slice(lower)[0];
  const firstStyle = {
    backgroundColor:
      first === progress
        ? "#00ff00"
        : first.indexOf(progress) === 0
          ? "yellow"
          : "red"
  };
  const visible = props.words.slice(lower + 1, upper).join(" ");

  return (
    <code>
      <span style={firstStyle}>{first}</span> {visible}
    </code>
  );
}

export default Words;
