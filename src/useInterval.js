import React from "react";

// see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  React.useEffect(
    () => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },
    [delay]
  );
}
