import React from "react";

function Words(props) {
  const { progress, words, range } = props;
  const [lower, upper] = range;
  const first = words.slice(lower)[0];
  const firstStyle = {
    padding: "3px",
    fontWeight: "bold",
    backgroundColor:
      first === progress
        ? "#b7eb8f"
        : first.indexOf(progress) === 0
        ? "#ffe58f"
        : "#ffa39e"
  };

  const visible = props.words.slice(lower + 1, upper).join(" ");

  return (
    <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
      <code>
        <span style={firstStyle}>{first}</span> {visible}
      </code>
    </div>
  );
}

export default Words;
