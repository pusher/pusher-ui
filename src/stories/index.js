import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Alert, Button, Code, Icon, Tooltip } from '../index';
import { icons } from '../components/icon-set';
import { CodeWrapper, Container, Section } from './components';


storiesOf('Alert', module)
  .addDecorator(getStory => (
    <Container>{getStory()}</Container>
  ))
  .add('color variants', () => (
    <Section>
      <CodeWrapper>
        <Alert title="Default">This is the default alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Primary" primary>This is a primary alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Success" success>This is a success alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Warning" warning>This is a warning alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Danger" danger>This is a danger alert.</Alert>
      </CodeWrapper>
    </Section>
  ))
  .add('filled color variants', () => (
    <Section>
      <CodeWrapper>
        <Alert title="Default" filled>This is the default alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Primary" primary filled>This is a primary alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Success" success filled>This is a success alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Warning" warning filled>This is a warning alert.</Alert>
      </CodeWrapper>
      <CodeWrapper>
        <Alert title="Danger" danger filled>This is a danger alert.</Alert>
      </CodeWrapper>
    </Section>
  ))
  .add('with a dismiss button', () => (
    <Section>
      <CodeWrapper>
        <Alert title="Primary" primary dismiss>This is a primary alert.</Alert>
      </CodeWrapper>
    </Section>
  ));

storiesOf('Button', module)
  .addDecorator(getStory => (
    <Container>{getStory()}</Container>
  ))
  .add('with the default theme', () => (
    <Section>
      <CodeWrapper name="Button">
        <Button onClick={action('click default')}>Default button</Button>
        <Button onClick={action('click primary')} primary>Primary button</Button>
        <Button onClick={action('click success')} success>Success button</Button>
        <Button onClick={action('click warning')} warning>Warning button</Button>
        <Button onClick={action('click danger')} danger>Danger button</Button>
        <Button onClick={action('click disabled')} disabled>Disabled button</Button>
      </CodeWrapper>
    </Section>
  ))
  .add('of different sizes', () => (
    <Section>
      <CodeWrapper name="Button">
        <Button primary size="small">Small</Button>
        <Button primary>Normal</Button>
        <Button primary size="large">Large</Button>
      </CodeWrapper>
    </Section>
  ))
  .add('as a React Router anchor', () => (
    <Section>
      <p>Note: as React Router is not set up here the href attribute is missing.</p>
      <CodeWrapper name="Button">
        <Button to="/home" primary>Go home!</Button>
      </CodeWrapper>
    </Section>
  ));

storiesOf('Code', module)
  .addDecorator(getStory => (
    <Container>{getStory()}</Container>
  ))
  .add('default', () => (
    <Section>
      <CodeWrapper name="Code" filter={['style']}>
        <Code language="javascript">{'const foo = "bar";'}</Code>
      </CodeWrapper>
    </Section>
  ))
  .add('with a menu', () => (
    <Section>
      <CodeWrapper name="Code" filter={['style']}>
        <Code language="javascript" menu>{'const foo = "bar";'}</Code>
      </CodeWrapper>
    </Section>
  ))
  .add('with line numbers', () => (
    <Section>
      <CodeWrapper name="Code" filter={['style']}>
        <Code language="javascript" menu showLineNumbers>{'const foo = "bar";'}</Code>
      </CodeWrapper>
    </Section>
  ));

storiesOf('Icon', module)
  .addDecorator(getStory => (
    <Container>{getStory()}</Container>
  ))
  .add('all icons in the their default size', () => (
    <Section>
      <p>Note: you must also include the “IconSet” component in the root of your app.</p>
      {icons.map(icon => (
        <CodeWrapper key={icon}>
          <Icon name={icon} />
        </CodeWrapper>
      ))}
    </Section>
  ))
  .add('various size formats', () => (
    <Section>
      <CodeWrapper>
        <Icon name="account" size={36} />
      </CodeWrapper>
      <CodeWrapper>
        <Icon name="account" size="48" />
      </CodeWrapper>
      <CodeWrapper>
        <Icon name="pusher-logo" size="120x37" />
      </CodeWrapper>
    </Section>
  ))
  .add('various colors', () => (
    <Section>
      <CodeWrapper>
        <Icon name="account" color="red" />
      </CodeWrapper>
      <CodeWrapper>
        <Icon name="account" color="#ff00ff" />
      </CodeWrapper>
    </Section>
  ))
  .add('arbitrary styles', () => (
    <Section>
      <CodeWrapper>
        <Icon name="account" style={{ opacity: 0.5, color: '#ff00ff' }} />
      </CodeWrapper>
    </Section>
  ));

storiesOf('Tooltip', module)
  .addDecorator(getStory => (
    <Container>{getStory()}</Container>
  ))
  .add('four different positions', () => (
    <Section>
      <p>
        Note: it is currently your responsibility to make sure that the Tooltip
        is actually visible. It only wraps the existing component and does not
        check whether there is space on the configured position (see the last
        Tooltip below) and it does not render the Tooltip as a “modal”.
      </p>
      <CodeWrapper>
        <Tooltip position="top" text="Hello, world!"><Button>Hover me</Button></Tooltip>
        <Tooltip position="right" text="Hello, world!"><Button>Hover me</Button></Tooltip>
        <Tooltip position="bottom" text="Hello, world!"><Button>Hover me</Button></Tooltip>
        <Tooltip position="left" text="Hello, world!"><Button>Hover me</Button></Tooltip>
      </CodeWrapper>
    </Section>
  ))
  .add('color variants', () => (
    <Section>
      <p>Each of the following has a different color:</p>
      <CodeWrapper>
        <Tooltip position="right" text="Primary color" primary><Button>Hover me</Button></Tooltip>
        <Tooltip position="right" text="Success!" success><Button>Hover me</Button></Tooltip>
        <Tooltip position="right" text="Warning!" warning><Button>Hover me</Button></Tooltip>
        <Tooltip position="right" text="Danger!" danger><Button>Hover me</Button></Tooltip>
      </CodeWrapper>
    </Section>
  ))
  .add('visibility by prop', () => (
    <Section>
      <CodeWrapper>
        <Tooltip position="bottom" text="Pusher is hiring!" isOpen><Button>Hover me</Button></Tooltip>
      </CodeWrapper>
    </Section>
  ));
