import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Button, Icon } from '../index';
import { icons } from '../components/icon-set';
import { CodeWrapper, Container, Section } from './components';


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
