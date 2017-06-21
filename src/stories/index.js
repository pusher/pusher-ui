import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import {
  Alert,
  Button,
  Card,
  Code,
  Dialog,
  Dropdown,
  Input,
  Icon,
  Layout,
  Link,
  Modal,
  Portal,
  Select,
  Text,
  Textarea,
  Toast,
  Tooltip,
} from '../index';
import { icons } from '../components/icon-set';
import {
  CodeWrapper,
  Container,
  Section,
  LayoutItem,
  LayoutWrapper,
} from './components';

/* eslint-disable no-alert */

storiesOf('Alert', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('color variants', () =>
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
    </Section>,
  )
  .add('filled color variants', () =>
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
    </Section>,
  )
  .add('with a dismiss button', () =>
    <Section>
      <CodeWrapper>
        <Alert title="Primary" primary dismiss>This is a primary alert.</Alert>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Button', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('with the default theme', () =>
    <Section>
      <CodeWrapper name="Button">
        <Button onClick={action('click default')}>Default button</Button>
      </CodeWrapper>
      <CodeWrapper name="Button">
        <Button onClick={action('click primary')} primary>
          Primary button
        </Button>
      </CodeWrapper>
      <CodeWrapper name="Button">
        <Button onClick={action('click secondary')} secondary>
          Secondary button
        </Button>
      </CodeWrapper>
      <CodeWrapper name="Button">
        <Button onClick={action('click danger')} primary danger>
          Primary danger button
        </Button>
      </CodeWrapper>
      <CodeWrapper name="Button">
        <Button onClick={action('click danger')} secondary danger>
          Secondary danger button
        </Button>
      </CodeWrapper>
      <CodeWrapper name="Button">
        <Button onClick={action('click disabled')} disabled>
          Disabled button
        </Button>
      </CodeWrapper>
    </Section>,
  )
  .add('as a React Router anchor', () =>
    <Section>
      <p>
        Note: as React Router is not set up here the href attribute is missing.
      </p>
      <CodeWrapper name="Button">
        <Button to="/home" primary>Go home!</Button>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Card', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('default', () =>
    <Section>
      <CodeWrapper name="Card">
        <Card>
          Hello, world! This is a card element, for text and other things.
        </Card>
      </CodeWrapper>
      <CodeWrapper name="Card">
        <Card padding={36}>
          With a custom padding
        </Card>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Code', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('default', () =>
    <Section>
      <CodeWrapper name="Code" filter={['style']} onWhite>
        <Code language="javascript">{'const foo = "bar";'}</Code>
      </CodeWrapper>
    </Section>,
  )
  .add('with a menu', () =>
    <Section>
      <CodeWrapper name="Code" filter={['style']} onWhite>
        <Code language="javascript" menu>
          {'const foo = "bar";'}
        </Code>
      </CodeWrapper>
    </Section>,
  )
  .add('with line numbers', () =>
    <Section>
      <CodeWrapper name="Code" filter={['style']} onWhite>
        <Code language="javascript" menu showLineNumbers>
          {'const foo = "bar";'}
        </Code>
      </CodeWrapper>
    </Section>,
  )
  .add('with a label', () =>
    <Section>
      <CodeWrapper name="Code" filter={['style']} onWhite>
        <Code label="Label" language="javascript" menu showLineNumbers>
          {'const foo = "bar";'}
        </Code>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Dialog', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('simple dialog', () =>
    <Section>
      <CodeWrapper>
        <Dialog
          title="Do you want to proceed?"
          confirmText="Delete feed"
          onCancel={action('onCancel fired')}
          onConfirm={action('onConfirm fired')}
          isOpen
        >
          <Text>This will destroy the feed and all of its content.</Text>
        </Dialog>
      </CodeWrapper>
    </Section>,
  )
  .add('danger dialog', () =>
    <Section>
      <CodeWrapper>
        <Dialog
          title="Do you want to proceed?"
          confirmText="Delete feed"
          onCancel={action('onCancel fired')}
          onConfirm={action('onConfirm fired')}
          isOpen
          danger
        >
          <Text>This will destroy the feed and all of its content.</Text>
        </Dialog>
      </CodeWrapper>
    </Section>,
  )
  .add('disabled dialog with input', () =>
    <Section>
      <CodeWrapper>
        <Dialog
          title="Do you want to proceed?"
          confirmText="Delete service"
          onCancel={action('onCancel fired')}
          onConfirm={action('onConfirm fired')}
          canConfirm={false}
          isOpen
          danger
        >
          <Text>Type the name of this instance to continue.</Text>
          <Input />
        </Dialog>
      </CodeWrapper>
    </Section>,
  )
  .add('dialog with input', () =>
    <Section>
      <CodeWrapper>
        <Dialog
          title="Do you want to proceed?"
          confirmText="Delete service"
          onCancel={action('onCancel fired')}
          onConfirm={action('onConfirm fired')}
          isOpen
          danger
        >
          <Text>Type the name of this instance to continue.</Text>
          <Input />
        </Dialog>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Dropdown', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('simple dropdown', () =>
    <Section>
      <CodeWrapper>
        <Dropdown render={() => <div>Hello!</div>}>
          <Button primary>Press to toggle</Button>
        </Dropdown>
      </CodeWrapper>
    </Section>,
  )
  .add('shown on hover', () =>
    <Section>
      <CodeWrapper>
        <Dropdown showOnHover render={() => <div>Hello!</div>}>
          <Button primary>Hover me</Button>
        </Dropdown>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Icon', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('all icons in the their default size', () =>
    <Section>
      <p>
        Note: you must also include the “IconSet” component in the root of your
        app.
      </p>
      {icons.map(icon =>
        <CodeWrapper key={icon}>
          <Icon name={icon} />
        </CodeWrapper>,
      )}
    </Section>,
  )
  .add('various size formats', () =>
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
    </Section>,
  )
  .add('various colors', () =>
    <Section>
      <CodeWrapper>
        <Icon name="account" color="red" />
      </CodeWrapper>
      <CodeWrapper>
        <Icon name="account" color="#ff00ff" />
      </CodeWrapper>
    </Section>,
  )
  .add('arbitrary styles', () =>
    <Section>
      <CodeWrapper>
        <Icon name="account" style={{ opacity: 0.5, color: '#ff00ff' }} />
      </CodeWrapper>
    </Section>,
  );

storiesOf('Layout', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('basic examples', () =>
    <Section>
      <CodeWrapper name="Layout">
        <LayoutWrapper>
          <LayoutItem block>Default horizontal</LayoutItem>
          <LayoutItem block>Layout</LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper vertical>
          <LayoutItem block>Vertical</LayoutItem>
          <LayoutItem block>Layout</LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper>
          <LayoutItem flex={1}>Flex 1</LayoutItem>
          <LayoutItem flex={2}>Flex 2</LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper gutter={15}>
          <LayoutItem>With</LayoutItem>
          <LayoutItem>a</LayoutItem>
          <LayoutItem>gutter</LayoutItem>
          <Layout gutter={15} flex vertical>
            <LayoutItem flex>between</LayoutItem>
            <LayoutItem>items</LayoutItem>
          </Layout>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper>
          <LayoutItem flex>
            This container is flexible in both directions.
          </LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper centerJustified>
          <LayoutItem>
            This item is centered horizontally.
          </LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper center>
          <LayoutItem>
            This item is centered vertically.
          </LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper centerCenter>
          <LayoutItem>
            This item is centered.
          </LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper justified>
          <LayoutItem>
            These items
          </LayoutItem>
          <LayoutItem>
            Are justified
          </LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper padding={48}>
          <div style={{ backgroundColor: '#fff', padding: '5px' }}>
            With a padding
          </div>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper aroundJustified>
          <LayoutItem>
            Around
          </LayoutItem>
          <LayoutItem>
            justified
          </LayoutItem>
        </LayoutWrapper>
      </CodeWrapper>
      <CodeWrapper name="Layout">
        <LayoutWrapper gutter={24} wrapped>
          <div style={{ width: 120, padding: 5, backgroundColor: '#fff' }}>
            Wrapped
          </div>
          <div style={{ width: 120, padding: 5, backgroundColor: '#fff' }}>
            Wrapped
          </div>
          <div style={{ width: 120, padding: 5, backgroundColor: '#fff' }}>
            Wrapped
          </div>
        </LayoutWrapper>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Toast', module)
  .addDecorator(getSTory => <Container>{getSTory()}</Container>)
  .add('without a parent container', () =>
    <Section>
      <p>
        Try switching back and forth to this tab to see how the toasts are
        rendered.
      </p>
      <p>
        Note: these toasts will slide in when rendered, however, you must take
        care of rendering them yourself. This can be done by creating an
        external container element (to position it as a layer on top of the
        main page content) and append items via Redux actions.
      </p>
      <CodeWrapper>
        <Toast text="Hello, world!" />
      </CodeWrapper>
      <CodeWrapper>
        <Toast text="Very good stuff" primary />
      </CodeWrapper>
      <CodeWrapper>
        <Toast text="Great job!" success />
      </CodeWrapper>
      <CodeWrapper>
        <Toast text="Careful!" warning />
      </CodeWrapper>
      <CodeWrapper>
        <Toast text="Oh no, danger!" danger />
      </CodeWrapper>
    </Section>,
  )
  .add('with timeouts', () =>
    <Section>
      <p>Toasts disappear after a timeout if so configured.</p>
      <CodeWrapper>
        <Toast text="2 seconds" primary timeout={2000} />
      </CodeWrapper>
      <CodeWrapper>
        <Toast text="5 seconds" success timeout={5000} />
      </CodeWrapper>
      <CodeWrapper>
        <Toast text="10 seconds" danger timeout={10000} />
      </CodeWrapper>
    </Section>,
  );

storiesOf('Portal', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('basic portal', () =>
    <Section>
      <CodeWrapper>
        <Portal isOpen>
          <div
            style={{
              flex: 1,
              opacity: 0.5,
              color: '#fff',
              backgroundColor: 'rgb(187, 49, 49)',
            }}
          >
            This is rendered in an outside DOM node: outside the app, but still
            within the StoryBook iframe. See the Modal component for a usage
            example.
          </div>
        </Portal>
      </CodeWrapper>
    </Section>,
  );

const events = {
  onSelectedClick: action('onSelectedClick fired'),
  onSelectItemClick: action('onSelectItemClick fired'),
  onOutsideClick: action('onOutsideClick fired'),
  onFilterChange: action('onFilterChange fired'),
  onFilterAction: action('onFilterAction fired'),
  onEnter: action('onEnter fired'),
};
storiesOf('Select')
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('none selected', () =>
    <Section>
      <CodeWrapper>
        <Select options={['a', 'b', 'c']} {...events} />
      </CodeWrapper>
      <CodeWrapper>
        <Select options={['a', 'b', 'c']} isOpen {...events} />
      </CodeWrapper>
    </Section>,
  )
  .add('with a selected item', () =>
    <Section>
      <CodeWrapper>
        <Select options={['a', 'b', 'c']} selectedIndex={1} {...events} />
      </CodeWrapper>
      <CodeWrapper>
        <Select
          options={['a', 'b', 'c']}
          selectedIndex={1}
          isOpen
          {...events}
        />
      </CodeWrapper>
    </Section>,
  )
  .add('filterable', () =>
    <Section>
      <CodeWrapper>
        <Select options={['a', 'b', 'c']} filter {...events} />
      </CodeWrapper>
      <CodeWrapper>
        <Select options={['a', 'b', 'c']} filter isOpen {...events} />
      </CodeWrapper>
      <CodeWrapper>
        <Select
          options={['a', 'b', 'c']}
          filterValue="b"
          filter
          isOpen
          {...events}
        />
      </CodeWrapper>
      <CodeWrapper>
        <Select
          options={['a', 'b', 'c']}
          filterValue="b"
          filter
          filterActionText="Create item"
          isOpen
          {...events}
        />
      </CodeWrapper>
    </Section>,
  );

storiesOf('Modal')
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('basic modal', () =>
    <Section>
      <CodeWrapper>
        <Modal isOpen>
          This is the default, unstyled modal.
        </Modal>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Input')
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('various states', () =>
    <Section>
      <CodeWrapper onWhite>
        <Input name="myField" defaultValue="Hello, world!" />
      </CodeWrapper>
      <CodeWrapper>
        <Input name="myField" defaultValue="Hello, world!" raised />
      </CodeWrapper>
      <CodeWrapper onWhite>
        <Input name="myField" defaultValue="Hello, world!" label="My label" />
      </CodeWrapper>
      <CodeWrapper onWhite>
        <Input
          name="myField"
          defaultValue="Hello, world!"
          label="My label"
          error
        />
      </CodeWrapper>
      <CodeWrapper>
        <Input
          name="myField"
          defaultValue="Hello, world!"
          label="My label"
          disabled
        />
      </CodeWrapper>
    </Section>,
  );

storiesOf('Text')
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('color variants', () =>
    <Section>
      <CodeWrapper name="Text">
        <Text>Hello, world!</Text>
      </CodeWrapper>
      <CodeWrapper name="Text">
        <Text primary>Hello, world!</Text>
      </CodeWrapper>
      <CodeWrapper name="Text">
        <Text secondary>Hello, world!</Text>
      </CodeWrapper>
      <CodeWrapper name="Text">
        <Text tertiary>Hello, world!</Text>
      </CodeWrapper>
    </Section>,
  )
  .add('as headings', () =>
    <Section>
      <CodeWrapper name="Text">
        <Text heading>This is a heading</Text>
      </CodeWrapper>
      <CodeWrapper name="Text">
        <Text size="26" heading>This is a heading with a custom size</Text>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Textarea')
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('various states', () =>
    <Section>
      <CodeWrapper onWhite>
        <Textarea name="myField" defaultValue="Hello, world!" />
      </CodeWrapper>
      <CodeWrapper>
        <Textarea name="myField" defaultValue="Hello, world!" raised />
      </CodeWrapper>
      <CodeWrapper onWhite>
        <Textarea
          name="myField"
          defaultValue="Hello, world!"
          label="Textarea"
        />
      </CodeWrapper>
      <CodeWrapper onWhite>
        <Textarea
          name="myField"
          defaultValue="Hello, world!"
          label="Textarea"
          error
        />
      </CodeWrapper>
      <CodeWrapper>
        <Textarea
          name="myField"
          defaultValue="Hello, world!"
          label="Textarea"
          disabled
        />
      </CodeWrapper>
    </Section>,
  );

storiesOf('Link', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('with the primary color by default', () =>
    <Section>
      <CodeWrapper>
        <Link to="/">Go home!</Link>
      </CodeWrapper>
    </Section>,
  );

storiesOf('Tooltip', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('four different positions', () =>
    <Section>
      <p>
        Note: it is currently your responsibility to make sure that the Tooltip
        is actually visible. It only wraps the existing component and does not
        check whether there is space on the configured position (see the last
        Tooltip below) and it does not render the Tooltip as a “modal”.
      </p>
      <CodeWrapper>
        <Tooltip position="top" text="Hello, world!">
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
      <CodeWrapper>
        <Tooltip position="right" text="Hello, world!">
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
      <CodeWrapper>
        <Tooltip position="bottom" text="Hello, world!">
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
      <CodeWrapper>
        <Tooltip position="left" text="Hello, world!">
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
    </Section>,
  )
  .add('color variants', () =>
    <Section>
      <p>Each of the following has a different color:</p>
      <CodeWrapper>
        <Tooltip position="right" text="Primary color" primary>
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
      <CodeWrapper>
        <Tooltip position="right" text="Success!" success>
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
      <CodeWrapper>
        <Tooltip position="right" text="Warning!" warning>
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
      <CodeWrapper>
        <Tooltip position="right" text="Danger!" danger>
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
    </Section>,
  )
  .add('visibility by prop', () =>
    <Section>
      <CodeWrapper>
        <Tooltip position="bottom" text="Pusher is hiring!" isOpen>
          <Button>Hover me</Button>
        </Tooltip>
      </CodeWrapper>
    </Section>,
  );

/* eslint-enable no-alert */
