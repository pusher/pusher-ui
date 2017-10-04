import PropTypes from 'prop-types';

const Aux = ({ children }) => children;

Aux.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Aux;
