// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Link,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  CodePane,
  Layout,
  Fill
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

const queryExamples = [
  { title: "Basic example", key: "basic" },
  { title: "Aggregation", key: "aggregate" },
  { title: "Arguments", key: "argument" },
  { title: "Aliases", key: "alias" },
  { title: "Fragments", key: "fragment" },
  { title: "Variables", key: "variable" },
  { title: "Directives", key: "directive" },
  { title: "Mutations", key: "mutation" },
  { title: "Inline Fragments", key: "inline_fragment" }
];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={400} theme={theme} progress="none" controls={false}>
        <Slide bgColor="primary">
          <div>
            <Image width={200} src={images.logo.replace("/", "")} />
            <Heading size={1} lineHeight={1} textColor="secondary">
              GraphQL & JS
            </Heading>
          </div>
        </Slide>
        <Slide bgColor="secondary">
          <Text textColor="primary" lineHeight={1.5} textSize={30} margin="20px auto">GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.</Text>
          <Text textColor="primary" textSize={30}>It was created by Facebook in 2012.</Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={1} fit>Motivation & History</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" >What GraphQL isn't</Heading>
          <List style={{ lineHeight: 2 }}>
            <ListItem>A Javascript framework</ListItem>
            <ListItem>A REST subset</ListItem>
            <ListItem>A database</ListItem>
            <ListItem>A unicorn <Image style={{ verticalAlign: "text-bottom" }} width={90} src={images.unicorn.replace("/", "")} /></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="tertiary">What is it then ?</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Example</Heading>
          <Layout>
            <Fill style={{ margin: 10 }}>
              <div style={{ marginBottom: 15 }}>Query</div>
              <CodePane
                lang="graphql"
                source={require("raw-loader!../assets/first_query.example")}
              />
            </Fill>
            <Fill style={{ margin: 10 }}>
              <div style={{ marginBottom: 15 }}>Schema</div>
              <CodePane
                lang="graphql"
                source={require("raw-loader!../assets/first_types.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary" fit>Queries & Mutations</Heading>
        </Slide>
        {queryExamples.map((q, i) => {
          return (
            <Slide key={i} bgColor="primary" textColor="tertiary" textSize="24px" maxHeight={1000}>
              <Heading size={6} margin="30px 0" >{q.title}</Heading>
              <Layout >
                <Fill style={{ margin: 10 }}>
                  <div style={{ marginBottom: 15 }}>Query</div>
                  <CodePane
                    lang="graphql"
                    source={require(`raw-loader!../assets/queries/${q.key}.example`)}
                  />
                </Fill>
                <Fill style={{ margin: 10 }}>
                  <div style={{ marginBottom: 15 }}>Result</div>
                  <CodePane
                    lang="json"
                    source={require(`raw-loader!../assets/responses/${q.key}.example`)}
                  />
                </Fill>
              </Layout>
            </Slide>
          );
        })}
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Why a Type System</Heading>
          <List style={{ lineHeight: 2 }}>
            <ListItem textSize={24}>Query parsing</ListItem>
            <ListItem textSize={24}>Query validation</ListItem>
            <ListItem textSize={24}>Documentation</ListItem>
            <ListItem textSize={24}>Completion</ListItem>
            <ListItem textSize={24}>Introspection</ListItem>
            <ListItem textSize={24}>Great Developer Experience</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="graphql"
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
        <Slide bgColor="primary" textColor="tertiary" textSize="24px" maxHeight={1000}>
          <Heading size={6} margin="30px 0" >Introspection</Heading>
          <Layout >
            <Fill style={{ margin: 10 }}>
              <div style={{ marginBottom: 15 }}>Query</div>
              <CodePane
                lang="graphql"
                source={require("raw-loader!../assets/introspection_query.example")}
              />
            </Fill>
            <Fill style={{ margin: 10 }}>
              <div style={{ marginBottom: 15 }}>Result</div>
              <CodePane
                lang="json"
                source={require("raw-loader!../assets/introspection_response.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary" fill margin={30}> 💖 GraphiQL 💖 </Heading>
          <Link href="http://localhost:3001/api">Demo</Link>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" margin={30}>Server Code</Heading>
          <Text fit>GraphQL is supported by a lot of programming languages</Text>
          <List>
            <ListItem textSize={26}>Javascript <small>(Facebook's GraphQL.js and Apollo's graphql-server)</small></ListItem>
            <ListItem textSize={26}>Go</ListItem>
            <ListItem textSize={26}>Java</ListItem>
            <ListItem textSize={26}>Scala</ListItem>
            <ListItem textSize={26}>Python</ListItem>
            <ListItem textSize={26}>And a lot more <Link href="http://graphql.org/code/">here</Link></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" margin={30}>Client Code</Heading>
          <Text fit>In Javascript there are 2 major client libraries</Text>
          <List>
            <ListItem textSize={26}>Apollo Client <small>(support React, React Native, Angular 2 or plain Javascript)</small></ListItem>
            <ListItem textSize={26}>Relay <small>(made by facebook for React applications)</small></ListItem>
          </List>
        </Slide>
        <Slide maxWidth={1600}>
          <Heading size={6} textColor="tertiary" margin={30}>Realy & Apollo</Heading>
          <Layout>
            <Fill>
              <div style={{ marginBottom: 15 }}>Apollo</div>
              <List>
                <ListItem textSize={30}>Easy to get started with</ListItem>
                <ListItem textSize={30}>Incremental adoption</ListItem>
                <ListItem textSize={30}>Straight forward</ListItem>
                <ListItem textSize={30}>Library support</ListItem>
                <ListItem textSize={30}>Great documentation</ListItem>
              </List>
            </Fill>
            <Fill>
              <div style={{ marginBottom: 15 }}>Relay</div>
              <List>
                <ListItem textSize={30}>Declarative</ListItem>
                <ListItem textSize={30}>Great runtime performance</ListItem>
                <ListItem textSize={30}>Data Dependency easy to manage</ListItem>
                <ListItem textSize={30}>Great Mutation system</ListItem>
                <ListItem textSize={30}>Steep learning curve</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary" fill margin={30}>Demo</Heading>
          <Link href="http://localhost:3001">App</Link><br/>
          <Link href="https://github.com/alexandrebodin/graphql-heroes-app">Source code</Link>
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary" fill margin={30}>Thank you !</Heading>
          <Text>Questions ?</Text>
        </Slide>
        <Slide lineHeight={1.3}>
          <Heading size={6} textColor="tertiary" fit margin={30}>Kilix Recrute !</Heading>
          <Text textSize={32}>Contact: <Link href="mailto:hello@kilix.fr">hello@kilix.fr</Link></Text>
          <Text textSize={32}>Contact: <Link href="mailto:abodin@kilix.fr">abodin@kilix.fr</Link></Text>
          <Text textSize={32}>Slack CM Js: Augustin & Alexandre</Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Links</Heading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem><Link href="http://graphql.org/">GraphQL website</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=WQLzZf34FJ8">Exploring GraphQL (by Lee Byron)</Link></ListItem>
            <ListItem><Link href="https://github.com/chentsulin/awesome-graphql#video">Awesome GraphQL 🚀🚀🚀🚀</Link></ListItem>
            <ListItem><Link href="http://dev.apollodata.com/">Apollo</Link></ListItem>
            <ListItem><Link href="https://facebook.github.io/relay/">Relay</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
