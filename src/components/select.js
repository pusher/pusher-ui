import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Icon from './icon';
import Layout from './layout';
import { pxToRem } from '../utils';

const Container = styled(Layout).attrs({
  vertical: true,
  justified: true,
})`
  position: relative;
  min-width: ${pxToRem(180)};
  color: ${props => props.theme.primaryTextColor};
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius1}px;
  box-shadow: ${props => props.theme.boxShadow1};
  outline: none;

  ${props => props.isOpen && css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}

  &:hover {
    cursor: ${props => (props.isOpen ? 'default' : 'pointer')};
  }
`;

const Items = styled(Layout).attrs({
  vertical: true,
})`
  position: absolute;
  top: ${pxToRem(40)};
  left: 0;
  right: 0;
  display: ${props => (props.visible ? 'flex' : 'none')};
  box-shadow: ${props => props.theme.boxShadow1};
  border-bottom-left-radius: ${props => props.theme.borderRadius1}px;
  border-bottom-right-radius: ${props => props.theme.borderRadius1}px;
  z-index: ${props => props.theme.zIndex1};

  div:last-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius1}px;
    border-bottom-right-radius: ${props => props.theme.borderRadius1}px;
  }
`;

const sizing = css`
  box-sizing: border-box;
  max-height: ${pxToRem(40)};
  padding: ${pxToRem(12)} ${pxToRem(18)};
`;

const Item = styled.div`
  ${sizing}
  user-select: none;
  background-color: ${props => (props.selected ? props.theme.backgroundColor1 : '#fff')};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundColor1};
  }
`;

const BorderlessInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  max-width: ${pxToRem(120)};
`;

const SelectedItem = styled(Layout).attrs({
  center: true,
  justified: true,
})`
  ${sizing}

  & > svg {
    margin-right: -5px;
  }
`;

class Select extends Component {
  static propTypes = {
    filter: PropTypes.bool,
    onSelect: PropTypes.func, // eslint-disable-line react/require-default-props
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    placeholder: PropTypes.string,
    selectedIndex: PropTypes.number, // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    filter: false,
    filterPlaceholder: 'Filter...',
    options: [],
    placeholder: 'Select one',
  };

  constructor(props) {
    super(props);
    this.state = {
      id: Math.random().toString(),
      isOpen: false,
      selectedIndex: props.selectedIndex,
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({ selectedIndex: nextProps.selectedIndex });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.isOpen && nextState.isOpen) {
      document.body.addEventListener('click', this.onOutsideClick);
    } else if (this.state.isOpen && !nextState.isOpen) {
      document.body.removeEventListener('click', this.onOutsideClick);
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      document.body.removeEventListener('click', this.onOutsideClick);
    }
  }

  onSelectedClick = () => {
    this.el.focus();
    this.setState({ isOpen: true });
  };

  onSelectItem = selectedIndex => () => {
    this.setState({ selectedIndex, isOpen: false });
    if (this.props.onSelect) {
      this.props.onSelect(selectedIndex, this.props.options);
    }
  };

  onOutsideClick = event => {
    let el = event.target;

    while (el !== document.body) {
      if (el.dataset.id === this.state.id) {
        break;
      }
      el = el.parentNode;
    }

    this.setState({ isOpen: false });
  };

  onFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onKeyDown = () => {
    this.setState({ selectedIndex: 0 });
  };

  selectedContent = () => {
    if (this.props.filter && this.state.isOpen) {
      return (
        <BorderlessInput
          type="text"
          placeholder={this.props.filterPlaceholder}
          onChange={this.onFilter}
          autoFocus
        />
      );
    }

    return this.state.selectedIndex >= 0
      ? this.props.options[this.state.selectedIndex]
      : this.props.placeholder;
  };

  render() {
    const { options, ...rest } = this.props;
    let opts = options;
    if (this.state.filter) {
      opts = opts.filter(option => option.match(new RegExp(this.state.filter)));
      if (opts.length === 0) {
        opts = [this.state.filter];
      }
    }

    return (
      <Container
        innerRef={c => (this.el = c)}
        data-id={this.state.id}
        isOpen={this.state.isOpen}
        onKeyDown={this.onKeyDown}
        tabIndex="0"
        {...rest}
      >
        <SelectedItem onClick={this.onSelectedClick}>
          {this.selectedContent()}
          <Icon name="caret-down" />
        </SelectedItem>
        <Items visible={this.state.isOpen}>
          {opts.map((item, index) => (
            <Item
              key={index}
              onClick={this.onSelectItem(index)}
              selected={index === this.state.selectedIndex}
            >
              {item}
            </Item>
          ))}
        </Items>
      </Container>
    );
  }
}

export default Select;
