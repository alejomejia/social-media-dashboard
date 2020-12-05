// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root } from './styles';

// Making Container component
const Header = ({ children }) => {
  return <Root className="Header">{children}</Root>;
};

// Adding proptypes to component
Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
