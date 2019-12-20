import React from "react";
import { Button, Card, Modal } from "antd";

function Introduction() {
  const [showMore, setShowMore] = React.useState(false);
  const handleHere = () => setShowMore(true);
  const handleOk = () => setShowMore(false);

  return (
    <Card>
      This is a simple game to test your typing speed. To begin, select a text
      source below. Randomly generated text based on the text source will
      appear, begin typing to start the 60 second countdown. The aim is to type
      as many words as possible before time runs out. Input is not
      case-sensitive, and you must input a space between each completed word. To
      find out more, click{" "}
      <Button size="small" onClick={handleHere}>
        here
      </Button>
      <Modal
        title="More information"
        visible={showMore}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[]}
        width="95%"
        style={{ maxWidth: "700px" }}
      >
        <div>
          <h4>How is the text generated?</h4>
          <p>
            The text is generated using <a>Markov chains</a> computed from the
            original source texts. Each source text is out of copyright and
            freely available as a text file from <a>Project Gutenberg</a>. A
            Markov chain text generator works by taking an initial word, then
            considering which word could follow it by referencing the source
            text, and weighting the potential words by frequency. This process
            can be continued infinitely.
          </p>

          <p>
            The generated text rarely makes much sense, as the model only
            considers the current word rather than any larger context.
          </p>

          <h4>What technologies are used?</h4>
          <p>
            I wrote a script which automatically generates the Markov models of
            the source text using <a>Haskell</a>. These are all precomputed and stored
            as JSON files which the application requests as required. This
            application is written using Javascript with the <a>React.js</a>{" "}
            framework, as well as the <a>Ant Design</a> UI framework for React.
            The React project itself is fairly simple, and I used{" "}
            <a>
              <code>create-react-app</code>
            </a>{" "}
            to generate the build scripts and initial structure.
          </p>

          <h4>Can I view the source code?</h4>
          <p>
            Yes&mdash;see <a href="#">here</a>
          </p>
        </div>
      </Modal>
    </Card>
  );
}

export default Introduction;
