// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root } from './styles';

// Making Section component
const Section = ({ children, l = 4, m = 4, s = 2, xs = 1 }) => {
  return (
    <Root className="Section" l={l} m={m} s={s} xs={xs}>
      <div className="Section__row">{children}</div>
    </Root>
  );
};

// Adding proptypes to component
Section.propTypes = {
  l: PropTypes.number,
  m: PropTypes.number,
  s: PropTypes.number,
  xs: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Section;
