import React from "react";
import { Card } from "antd";

function Words(props) {
  const { progress, words, range } = props;
  const [lower, upper] = range;
  const first = words.slice(lower)[0];
  const firstStyle = {
    backgroundColor:
      first === progress
        ? "#b7eb8f"
        : first.indexOf(progress) === 0
          ? "#ffe58f"
          : "#ffa39e"
  };
  const visible = props.words.slice(lower + 1, upper).join(" ");

  return (
    <Card
      size="small"
      title="Words to type"
      style={{ width: '100%' }}
    >
      <code>
        <span style={firstStyle}>{first}</span> {visible}
      </code>
    </Card>
  );
}

export default Words;
