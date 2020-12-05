// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root } from './styles';

// Making Container component
const Title = ({ children }) => {
  return <Root className="Title">{children}</Root>;
};

// Adding proptypes to component
Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
