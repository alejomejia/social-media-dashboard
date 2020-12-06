// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root } from './styles';

// Making Section component
const Section = ({ children }) => {
  return <Root className="Section">{children}</Root>;
};

// Adding proptypes to component
Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
