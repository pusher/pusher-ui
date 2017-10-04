/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'glamorous';
import PropTypes from 'prop-types';

import {
  Alert,
  Aux,
  Block,
  Button,
  Card,
  Checkbox,
  Code,
  Dialog,
  Flex,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Icon,
  IconSet,
  Inline,
  InlineBlock,
  InlineCode,
  Input,
  Label,
  Link,
  Modal,
  P,
  Textarea,
  Toast,
  Tooltip,
  icons,
  insertGlobalBaseStyles,
  theme,
} from './index';

insertGlobalBaseStyles({
  ...theme,
  backgroundColor1: '#fff',
});

const Demo = props => (
  <Flex flexDirection="column" gutter={12}>
    <H2>{props.component}</H2>
    {props.children}
  </Flex>
);

Demo.propTypes = {
  component: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class ModalDemo extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <Block>
        <Button onClick={() => this.setState({ isOpen: true })} primary>
          Open modal!
        </Button>
        <Modal isOpen={this.state.isOpen}>I am rendered in a modal</Modal>
      </Block>
    );
  }
}

class DialogDemo extends Component {
  state = {
    isOpen: false,
  };

  dismiss = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Block>
        <Button onClick={() => this.setState({ isOpen: true })} primary>
          Open dialog!
        </Button>
        <Dialog
          isOpen={this.state.isOpen}
          title="Confirm something"
          confirmText="Are you sure that ... stuff?"
          onCancel={this.dismiss}
          onConfirm={this.dismiss}
        >
          <P>Hello, world!</P>
        </Dialog>
      </Block>
    );
  }
}

const App = () => (
  <Block>
    <IconSet />
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection="column"
        gutter={36}
        padding={24}
        maxWidth={960}
        margin="0 auto"
      >
        <Flex flexDirection="column" gutter={24}>
          <H1>Introduction</H1>
          <P>
            The purpose of Pusher UI is to provide a solid set of base
            components for our front-end projects and to enforce conventions
            that we believe to be good across different projects.
          </P>

          <H1>API</H1>
          <P>
            All of the components allow you to pass in arbitrary CSS properties
            as props. This is meant to make our lives easier when elements
            require minor adjustments. For more complex styles you should create
            new components with glamorous or (preferably) wrap existing
            components from this library with new styles.
          </P>
          <P>
            Some of the components can have different sets of colors, these are
            usually configured by providing a prop that determines their type.
            For now, you can examine how the demos are rendered below by
            installing the React Dev Tools.
          </P>
          <P>
            This project is still a work in progress, so please report any bugs
            or inconsistencies you may find or thoughts about potential
            improvements.
          </P>
        </Flex>

        <Demo component="Layout components">
          <Block>
            This is a <InlineCode>Block</InlineCode>element.
          </Block>
          <Flex>
            This is a <InlineCode>Flex</InlineCode> element.
          </Flex>
          <Inline>
            This is an <InlineCode>Inline</InlineCode> element.
          </Inline>
          <InlineBlock>
            This is an <InlineCode>InlineBlock</InlineCode> element.
          </InlineBlock>
        </Demo>

        <Demo component="Typography components">
          <Alert primary>
            <P>
              We currently expose a component for each of the headings and
              paragraph tags.
            </P>
            <P>
              For now, simply wrap these or define global styles for each so
              that a font size prop does not need to be used.
            </P>
          </Alert>
          <H1>H1</H1>
          <H2>H2</H2>
          <H3>H3</H3>
          <H4>H4</H4>
          <H5>H5</H5>
          <H6>H6</H6>
          <P>P</P>
        </Demo>

        <Demo component="Alert">
          <Alert>Default alert</Alert>
          <Alert primary>Primary alert</Alert>
          <Alert success>Success alert</Alert>
          <Alert warning>Warning alert</Alert>
          <Alert danger>Danger alert</Alert>
          <Alert dismiss>Dismissible alert</Alert>
        </Demo>

        <Demo component="Aux">
          <P>
            Aux enables you to wrap a list of elements without rendering a
            wrapping element.
          </P>
          <Aux>
            <Block>1</Block>
            <Block>2</Block>
            <Block>3</Block>
          </Aux>
        </Demo>

        <Demo component="Button">
          <Flex flexDirection="column" gutter={12} alignSelf="flex-start">
            <Button>Default button</Button>
            <Button success>Success button</Button>
            <Button warning>Warning button</Button>
            <Button danger>Danger button</Button>
            <Button disabled>Disabled button</Button>
            <Button primary>Primary button</Button>
            <Button primary success>
              Primary success button
            </Button>
            <Button primary warning>
              Primary warning button
            </Button>
            <Button primary danger>
              Primary danger button
            </Button>
            <Button primary disabled>
              Primary disabled button
            </Button>
          </Flex>
        </Demo>

        <Demo component="Card">
          <Card>Default card</Card>
        </Demo>

        <Demo component="Checkbox">
          <Checkbox label="You can toggle me" checked={false} color={'red'} />
          <Checkbox label="Check me out!" checked />
          <Checkbox label="I am disabled" checked disabled />
          <Checkbox label="Error!!!" error checked />
        </Demo>

        <Demo component="Code">
          <Code language="javascript">{'const foo = "bar";'}</Code>
          <Code language="javascript" menu>
            {'const foo = "bar";'}
          </Code>
        </Demo>

        <Demo component="Dialog">
          <DialogDemo />
        </Demo>

        <Demo component="Icon and IconSet">
          <Flex gutter={12}>
            {icons.map(name => <Icon name={name} key={name} />)}
          </Flex>
        </Demo>

        <Demo component="InlineCode">
          <p>
            This is <InlineCode>a snippet</InlineCode>.
          </p>
        </Demo>

        <Demo component="Input">
          <Input placeholder="default input" />
          <Input placeholder="danger input" danger />
          <Input label="custom label" placeholder="with a label" danger />
        </Demo>

        <Demo component="Label">
          <Label>Hello, I am a label!</Label>
        </Demo>

        <Demo component="Link">
          <p>
            Note: the links below do not work outside a React Router context.
          </p>
          <Link to="/">I am a link</Link>
          <Link to="https://example.com" external>
            I am an external link (new tab)
          </Link>
        </Demo>

        <Demo component="Modal">
          <ModalDemo />
        </Demo>

        <Demo component="Portal">
          <Alert primary>No demo for a non-UI component.</Alert>
        </Demo>

        <Demo component="Textarea">
          <Textarea placeholder="I am a textarea!" />
          <Textarea
            placeholder="I am a textarea with a label!"
            label="A label"
          />
        </Demo>

        <Demo component="Toast">
          <Toast text="Default Toast" />
          <Toast text="Dismissible Toast" dismiss />
          <Toast text="Primary Toast" primary />
          <Toast text="Success Toast" success />
          <Toast text="Warning Toast" warning />
          <Toast text="Danger Toast" danger />
        </Demo>

        <Demo component="Tooltip">
          <Tooltip text="Hello!" position="top">
            Top Tooltip
          </Tooltip>
          <Tooltip text="Hello!" position="right" primary>
            Right Tooltip
          </Tooltip>
          <Tooltip text="Hello!" position="bottom" success>
            Success Bottom Tooltip
          </Tooltip>
          <Tooltip text="Hello!" position="left" warning>
            Warning Left Tooltip
          </Tooltip>
          <Tooltip text="Hello!" position="top" danger>
            Danger Top Tooltip
          </Tooltip>
        </Demo>
      </Flex>
    </ThemeProvider>
  </Block>
);

render(<App />, document.getElementById('container'));
