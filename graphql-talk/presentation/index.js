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
  Text
} from "spectacle";

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
        <Slide bgColor="secondary" textColor="primary">
          GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What GraphQL isn't</Heading>
          <List>
            <ListItem>A Javascript framework</ListItem>
            <ListItem>A REST subset</ListItem>
            <ListItem>A database</ListItem>
            <ListItem>A unicorn</ListItem>
            <Image width="200" src={images.unicorn.replace("/", "")} />
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
