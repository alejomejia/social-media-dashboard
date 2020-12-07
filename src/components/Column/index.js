// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root } from './styles';

// Making Column component
const Column = ({ children }) => {
  return <Root className="Column">{children}</Root>;
};

// Adding proptypes to component
Column.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Column;
