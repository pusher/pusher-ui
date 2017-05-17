import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

import Icon from './icon';
import Layout from './layout';
import { pxToRem } from '../utils';

const Container = styled(Layout).attrs({
  center: true,
  justified: true,
})`
  position: relative;
  box-sizing: border-box;
  height: ${pxToRem(40)};
  min-width: ${pxToRem(180)};
  padding: ${pxToRem(12)} ${pxToRem(18)};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius1}px;
  color: ${props => (props.selectedIndex ? props.theme.primaryTextColor : props.theme.secondaryTextColor)};
  background-color: #fff;
  cursor: pointer;

  & > svg {
    margin-right: -5px;
  }
`;

const DropdownList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  min-width: 100%;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  max-height: ${pxToRem(420)};
  overflow: auto;
`;

const DropdownItem = styled(Layout).attrs({
  center: true,
})`
  box-sizing: border-box;
  height: ${pxToRem(40)};
  padding: ${pxToRem(12)} ${pxToRem(18)};
  background-color: ${props => (props.selected ? props.theme.backgroundColor1 : '#fff')};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundColor1};
  }
`;

class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    selectedIndex: PropTypes.number, // eslint-disable-line react/require-default-props
    onSelect: PropTypes.func, // eslint-disable-line react/require-default-props
    label: PropTypes.string,
  };

  static defaultProps = {
    label: 'Select one',
  };

  constructor(props) {
    super(props);
    this.state = {
      id: Math.random().toString(),
      visible: false,
      dropdownX: 0,
      dropdownY: 0,
      selectedIndex: props.selectedIndex,
    };
  }

  componentDidMount() {
    this.setState({ dropdownY: this.el.offsetHeight - 10 });
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  selectItem = index => () => {
    this.setState({ selectedIndex: index, visible: false });
    if (this.props.onSelect) {
      this.props.onSelect(this.props.options, index);
    }
  };

  render() {
    return (
      <div
        style={{ position: 'relative' }}
        ref={el => (this.el = el)}
        data-id={this.state.id}
      >
        <Container
          onClick={this.toggleVisibility}
          selected={this.state.selectedIndex}
        >
          {this.state.selectedIndex >= 0
            ? this.props.options[this.state.selectedIndex]
            : this.props.label}
          <Icon name="caret-down" size="20" />
        </Container>
        <Motion style={{ spring: spring(this.state.visible ? 1 : 0) }}>
          {props => (
            <DropdownList
              visible={this.state.visible}
              style={{
                opacity: props.spring,
                top: this.state.dropdownY + props.spring * 9,
                left: this.state.dropdownX,
              }}
            >
              {this.props.options.map((option, index) => (
                <DropdownItem
                  key={index}
                  onClick={this.selectItem(index)}
                  selected={this.state.selectedIndex === index}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Motion>
      </div>
    );
  }
}

export default Select;
