import React from "react";
import { Button, Card, Modal } from "antd";

function Introduction() {
  const [showMore, setShowMore] = React.useState(false);
  const handleHere = () => setShowMore(true);
  const handleOk = () => setShowMore(false);
  const NewTabLink = props => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );

  return (
    <Card>
      This is a simple game to test your typing speed. To begin, select a text
      source below, then randomly generated text based on the source will
      appear. When you start typing a 60 second countdown begins, the aim is to
      type as many words as possible before time runs out. Input is not
      case-sensitive, and you must input a space between each completed word. To
      find out more about how this works, click{" "}
      <Button size="small" onClick={handleHere}>
        here
      </Button>
      <Modal
        title="More information"
        visible={showMore}
        onOk={handleOk}
        onCancel={handleOk}
        footer={null}
        width="95%"
        style={{ maxWidth: "700px", top: "3%" }}
      >
        <div>
          <h4>How is the text generated?</h4>
          <p>
            The text is generated using{" "}
            <NewTabLink href="https://en.wikipedia.org/wiki/Markov_chain">
              Markov chains
            </NewTabLink>{" "}
            computed from the original source texts. Each source text is out of
            copyright and freely available as a text file from{" "}
            <NewTabLink href="https://www.gutenberg.org/">
              Project Gutenberg
            </NewTabLink>
            . A Markov chain text generator works by taking an initial word,
            then considering which word could follow it by referencing the
            source text, and weighting the potential words by frequency. This
            process can be continued infinitely.
          </p>

          <p>
            The generated text rarely makes much sense, as the model only
            considers the current word rather than any larger context.
          </p>

          <h4>What technologies are used?</h4>
          <p>
            I wrote a script which automatically generates the Markov models of
            the source text using{" "}
            <NewTabLink href="https://www.haskell.org/">Haskell</NewTabLink>.
            These are all precomputed and stored as JSON files which the
            application requests as required. This application is written using
            Javascript with the{" "}
            <NewTabLink href="https://reactjs.org/">React.js</NewTabLink>{" "}
            framework, as well as the{" "}
            <NewTabLink href="https://ant.design/">Ant Design</NewTabLink> UI
            framework. The React project itself is fairly simple, and I used{" "}
            <NewTabLink href="https://create-react-app.dev/">
              <code>create-react-app</code>
            </NewTabLink>{" "}
            to generate the build scripts and initial structure.
          </p>

          <h4>Can I view the source code?</h4>
          <p>
            Yes&mdash;see{" "}
            <NewTabLink href="https://github.com/decb/typing-test/">
              here
            </NewTabLink>
          </p>
        </div>
      </Modal>
    </Card>
  );
}

export default Introduction;
