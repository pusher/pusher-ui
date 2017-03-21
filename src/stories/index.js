import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Button } from '../index';
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
      <CodeWrapper name="Button">
        <Button primary>Go home!</Button>
      </CodeWrapper>
    </Section>
  ));
