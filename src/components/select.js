import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Icon from './icon';
import Input from './input';
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

  ${props =>
    props.isOpen &&
    css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}

  &:hover {
    cursor: ${props => (props.isOpen ? 'default' : 'pointer')};
  }

  &:focus {
    box-shadow:
      ${props => props.theme.boxShadow1},
      inset 0 0 0 2px ${props => transparentize(0.7, props.theme.primaryColor)};
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
  max-height: 40vh;
  overflow: auto;

  div:last-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius1}px;
    border-bottom-right-radius: ${props => props.theme.borderRadius1}px;
  }
`;

const sizing = css`
  box-sizing: border-box;
  height: ${pxToRem(40)};
  padding: ${pxToRem(12)} ${pxToRem(18)};
`;

const Item = styled.div`
  ${sizing}
  user-select: none;
  background-color: ${props =>
    props.selected ? props.theme.backgroundColor1 : '#fff'};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundColor1};
  }
`;

const BorderlessInput = styled(Input)`
  background-color: ${props => props.theme.white};
  border: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &:focus {
    box-shadow: inset 0 0 0 2px ${props =>
      transparentize(0.7, props.theme.primaryColor)};
  }
`;

const SelectedItem = styled(Layout).attrs({
  center: true,
  justified: true,
})`
  ${sizing}

  & > svg {
    color: ${props => props.theme.tertiaryTextColor};
    position: absolute;
    right: 13px;
  }
`;

const Placeholder = styled.span`
  color: ${props => props.theme.tertiaryTextColor};
`;

const FilterAction = styled(Layout)`
  color: ${props => props.theme.primaryColor};
  background-color: #fff;
  ${sizing}

  :hover {
    cursor: pointer;
  }
`;

class Select extends Component {
  static propTypes = {
    filter: PropTypes.bool,
    filterActionText: PropTypes.string, // eslint-disable-line react/require-default-props
    filterPlaceholder: PropTypes.string,
    filterValue: PropTypes.string, // eslint-disable-line react/require-default-props
    isOpen: PropTypes.bool,
    onEnter: PropTypes.func, // eslint-disable-line react/require-default-props
    onFilterAction: PropTypes.func, // eslint-disable-line react/require-default-props
    onFilterChange: PropTypes.func, // eslint-disable-line react/require-default-props
    onSelectedClick: PropTypes.func, // eslint-disable-line react/require-default-props
    onSelectItemClick: PropTypes.func, // eslint-disable-line react/require-default-props
    onOutsideClick: PropTypes.func, // eslint-disable-line react/require-default-props
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    placeholder: PropTypes.string,
    selectedIndex: PropTypes.number, // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    filter: false,
    filterPlaceholder: 'Filter...',
    isOpen: false,
    options: [],
    placeholder: 'Select one',
  };

  componentWillUpdate(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.el.focus();
      setTimeout(() => {
        window.addEventListener('click', this.onOutsideClick);
      });
    } else if (this.props.isOpen && !nextProps.isOpen) {
      window.removeEventListener('click', this.onOutsideClick);
    }
  }

  componentWillUnmount() {
    if (this.props.isOpen) {
      window.removeEventListener('click', this.onOutsideClick);
    }
  }

  onSelectedClick = () => {
    if (this.props.onSelectedClick) {
      this.props.onSelectedClick();
    }
  };

  onSelectItemClick = selectedIndex => () => {
    if (this.props.onSelectItemClick) {
      this.props.onSelectItemClick(selectedIndex, this.props.options);
    }
  };

  onOutsideClick = event => {
    let el = event.target;

    while (el !== document.documentElement) {
      if (el.getAttribute('data-id') === this.id) {
        break;
      }
      el = el.parentNode;
    }

    if (this.props.onOutsideClick) {
      this.props.onOutsideClick();
    }
  };

  onFilterChange = event => {
    if (this.props.onFilterChange) {
      this.props.onFilterChange(event.target.value);
    }
  };

  onFilterAction = () => {
    if (this.props.onFilterAction) {
      this.props.onFilterAction(this.props.selectedIndex, this.props.options);
    }
  };

  onKeyDown = event => {
    if (event.keyCode === 13 && this.props.onEnter) {
      event.preventDefault();
      this.props.onEnter(event.target.value);
    } else if (event.keyCode === 27) {
      this.props.onOutsideClick();
    }
  };

  id = Math.random().toString();

  selectedContent = () => {
    if (this.props.filter && this.props.isOpen) {
      const value = this.props.filter
        ? this.props.filterValue
        : this.props.options[this.props.selectedIndex];

      return (
        <BorderlessInput
          type="text"
          placeholder={this.props.filterPlaceholder}
          onChange={this.onFilterChange}
          value={value}
          autoFocus
        />
      );
    }

    if (this.props.selectedIndex >= 0) {
      return <span>{this.props.options[this.props.selectedIndex]}</span>;
    }

    return <Placeholder>{this.props.placeholder}</Placeholder>;
  };

  render() {
    const { options } = this.props;
    let opts = options;
    if (this.props.filter) {
      opts = opts.filter(option =>
        option.match(new RegExp(this.props.filterValue)),
      );
    }

    return (
      <Container
        data-id={this.id}
        innerRef={c => (this.el = c)}
        isOpen={this.props.isOpen}
        onKeyDown={this.onKeyDown}
        tabIndex={this.props.filter ? -1 : 0}
        {...this.props}
      >
        <SelectedItem onClick={this.onSelectedClick}>
          {this.selectedContent()}
          <Icon name="caret-down" />
        </SelectedItem>
        <Items visible={this.props.isOpen}>
          {opts.map((item, index) =>
            <Item
              key={index}
              onClick={this.onSelectItemClick(index)}
              selected={index === this.props.selectedIndex}
            >
              {item}
            </Item>,
          )}
          {this.props.filter &&
            this.props.filterActionText &&
            <FilterAction onClick={this.onFilterAction}>
              {this.props.filterActionText}
            </FilterAction>}
        </Items>
      </Container>
    );
  }
}

export default Select;
