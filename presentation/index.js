// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/sisense_logo_yellow.png"),
  webSocket: require("../assets/Web_Socket.png"),
  rxjs: require("../assets/rxjs.png"),
  buffer: require("../assets/buffer.png"),
  window: require("../assets/window.png"),
  IE: require("../assets/IE.png"),
  badIdea: require("../assets/badIdea.jpg"),
  concat: require("../assets/concat.png"),
  merge: require("../assets/merge.png"),
  debounce: require("../assets/debounce.png"),
  throttle: require("../assets/throttle.png"),
  filter: require("../assets/filter.png"),
  stream: require("../assets/stream.jpg"),
  engine: require("../assets/engine.jpg"),
  groupBy: require("../assets/groupBy.png"),
  fast: require("../assets/fast.gif"),
  known: require("../assets/known.gif"),
  scenes: require("../assets/scenes.gif"),
  lioUnshaved: require("../assets/lio_unshaved.png"),
  lioShaved: require("../assets/lio_shaved.jpg"),
  yuri: require("../assets/Yuri.jpg"),
  x: require("../assets/x.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="none">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Streaming Processing Engine
          </Heading>
          <Image src={images.logo} margin="100px auto 40px" height="150px"/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Introduction
          </Heading>
          <Image src={images.yuri} margin="100px auto 40px" height="250px"/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            W W W
          </Heading>
          <Appear fid="1">
            <Text margin="45px 0 0" textColor="tertiary" textSize={100} bold>
              Web Sockets
            </Text>
          </Appear>
          <Appear fid="2">
            <Text margin="45px 0 0" textColor="tertiary" textSize={100} bold>
              Web Workers
            </Text>
          </Appear>
          <Appear fid="3">
            <Text margin="45px 0 0" textColor="tertiary" textSize={100} bold>
              Web Streaming
            </Text>
          </Appear>
          <Appear fid="3">
            <Image src={images.x} margin="-160px 850px auto auto" width="300px" height="150px"/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Web Sockets</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Communication</ListItem>
            </Appear>
            <Appear fid="2">
              <Image src={images.webSocket} margin="-60px 850px auto 650px"/>
            </Appear>
            <Appear fid="3">
              <ListItem margin="-360px auto auto auto">Web Sockets VS Ajax</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem margin="40px auto auto auto">Why Not?</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Web Workers</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Threads & Interrupting the User Interface</ListItem>
            </Appear>
            <Appear fid="2">
              <Image src={images.IE} margin="-140px auto auto 310px" width="300px" height="150px"/>
            </Appear>
            <Appear fid="3">
              <ListItem>Background</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Abilities & Limitations</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>Communication</ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem>Why Not?</ListItem>
            </Appear>
            <Appear fid="7">
              <Image src={images.lioUnshaved} margin="20px 850px auto auto" height="250px"/>
            </Appear>
            <Appear fid="8">
              <Image src={images.lioShaved} margin="-600px 850px 40px 260px" height="250px"/>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Streaming</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Flow</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Stream: ---x------x-----x--------x--x---</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>RxJS</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Why Not?</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit textColor="primary">Streaming Processing Engine</Heading>
          <BlockQuote>
            <Quote textSize={26}>What happens when you combine your passion, strength and value? This is the process of creating true art.</Quote>
            <Cite textSize={26}>J.R. Rim</Cite>
          </BlockQuote>
          <Image src={images.engine} height="250px"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="secondary">The Idea</Heading>
          <Image src={images.badIdea} height="250px"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Why</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Data as stream</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Processing data</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Client - Server</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Fast</ListItem>
            </Appear>
            <Appear fid="5">
              <Image src={images.fast} height="250px"/>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="secondary">Base Concepts</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Modules</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>package.json</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Entry</ListItem>
            </Appear>
            <Appear fid="3">
              <Image src={images.known} height="250px"/>
            </Appear>
            <Appear fid="4">
              <ListItem>Importing</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>Exporting</ListItem>
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/package.json.example")}
          ranges={[
              { loc: [0, 16], title: "Module package.json" },
              { loc: [1, 2], note: "Flow" },
              { loc: [2, 3], note: "Entry" },
              { loc: [4, 7], note: "Same as npm module" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/common.js.example")}
          ranges={[
              { loc: [0, 9], title: "Module index.js" },
              { loc: [2, 8], note: "Export" },
              { loc: [3, 7], note: "Functions..." }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Positions</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/package.json.example")}
          ranges={[
              { loc: [0, 16], title: "Module package.json" },
              { loc: [8, 9], note: "webSocket / webWorker / main / omitted" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Flow</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Everything Is a Stream</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Input And Output</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>onData, onError, onComplete</ListItem>
            </Appear>
            <Appear fid="2">
              <Image src={images.stream} margin="-100px 850px auto 850px" width="300px"/>
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/usage.example")}
          ranges={[
              { loc: [0, 36], title: "Usage And Activation" },
              { loc: [0, 1], note: "Import" },
              { loc: [2, 3], note: "Create" },
              { loc: [4, 7]},
              { loc: [8, 9], note: "Pipe"},
              { loc: [8, 12], note: "Module"},
              { loc: [12, 13], note: "Position"},
              { loc: [13, 16]},
              { loc: [16, 23], note: "Activation"},
              { loc: [16, 19], note: "onData"},
              { loc: [19, 20], note: "onError"},
              { loc: [20, 23], note: "onComplete"},
          ]}
        />

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit textColor="primary">Behind The Scenes</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Setup</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Loading Modules</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Pipe</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Activatation</ListItem>
            </Appear>
            <Appear fid="5">
              <Image src={images.scenes} margin="-100px 850px auto 650px" width="300px"/>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit textColor="primary">Example</Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/example.main.js.example")}
          ranges={[
              { loc: [0, 36], title: "Full Example" },
              { loc: [4, 7], note: "Params" },
              { loc: [8, 10], note: "Flow start from server" },
              { loc: [10, 14]}
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/example.main.js.example")}
          ranges={[
              { loc: [14, 18]}
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/example.main.js.example")}
          ranges={[
              { loc: [18, 23]}
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/example.main.js.example")}
          ranges={[
              { loc: [23, 28]}
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/example.main.js.example")}
          ranges={[
              { loc: [28, 31]}
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary">Moving Modules</Heading>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Loading Modules</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Change Position</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>WOW</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="secondary">Extras</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Buffer & Window</Heading>
          <Appear fid="1">
            <Image src={images.buffer} height="300px"/>
          </Appear>
          <Appear fid="2">
            <Image src={images.window} height="300px"/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Concat & Merge</Heading>
          <Appear fid="1">
            <Image src={images.concat} height="300px"/>
          </Appear>
          <Appear fid="2">
            <Image src={images.merge} height="300px"/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Debounce & Throttle</Heading>
          <Appear fid="1">
            <Image src={images.debounce} height="300px"/>
          </Appear>
          <Appear fid="2">
            <Image src={images.throttle} height="300px"/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Filter & Group By</Heading>
          <Appear fid="1">
            <Image src={images.filter} height="300px"/>
          </Appear>
          <Appear fid="2">
            <Image src={images.groupBy} height="300px"/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Fork</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary">Future</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary">End</Heading>
        </Slide>

      </Deck>
    );
  }
}
