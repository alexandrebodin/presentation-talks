// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  CodePane,
  Layout,
  Fill
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/logo.png"),
  unicorn: require("../assets/unicorn.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#e535ab",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={400} theme={theme} progress="none" controls={false}>
        <Slide bgColor="primary">
          <div>
            <Image width="200" src={images.logo.replace("/", "")} />
            <Heading size={1} lineHeight={1} textColor="secondary">
              GraphQL & JS
            </Heading>
          </div>
        </Slide>
        <Slide bgColor="secondary">
          <Text textColor="primary" textSize={30} margin="20px auto">GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.</Text>
          <Text textColor="primary" textSize={30}>It was created by Facebook in 2012.</Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What GraphQL isn't</Heading>
          <List style={{ lineHeight: 2 }}>
            <ListItem>A Javascript framework</ListItem>
            <ListItem>A REST subset</ListItem>
            <ListItem>A database</ListItem>
            <ListItem>A unicorn <Image style={{ verticalAlign: "text-bottom" }} width="90" src={images.unicorn.replace("/", "")} /></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="tertiary" caps>What is it ?</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill style={{ margin: 10 }}>
              Queries
              <CodePane
                lang="graphql"
                source={require("raw-loader!../assets/first_query.example")}
              />
            </Fill>
            <Fill style={{ margin: 10 }}>
              A Schema
              <CodePane
                lang="graphql"
                source={require("raw-loader!../assets/first_types.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Why a Type System</Heading>
          <List style={{ lineHeight: 2 }}>
            <ListItem textSize={24}>Query parsing</ListItem>
            <ListItem textSize={24}>Query validation</ListItem>
            <ListItem textSize={24}>Documentation</ListItem>
            <ListItem textSize={24}>Completion</ListItem>
            <ListItem textSize={24}>Great Developer Experience</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/types.example")}
          ranges={[
            { loc: [0, 0], title: "Type system" },
            { loc: [0, 3], title: "Query type" },
            { loc: [1, 2] },
            { loc: [6, 11], title: "Object type" },
            { loc: [7, 8] },
            { loc: [14, 18], title: "Arguments" },
            { loc: [16, 17] },
            { loc: [19, 22] },
            { loc: [26, 31], title: "Sclar types" },
            { loc: [34, 38], title: "Enum types" },
            { loc: [41, 46], title: "Interface types" },
            { loc: [47, 54] },
            { loc: [58, 59], title: "Union types" },
            { loc: [62, 66], title: "Input types" },
            { loc: [69, 72], title: "Mutation type" }
          ]}
        />
      </Deck>
    );
  }
}
