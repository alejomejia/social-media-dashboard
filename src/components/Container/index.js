// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root } from './styles';

// Making Container component
const Container = ({ children }) => {
  return (
    <Root className="Container">
      <div className="Container__wrapper">
        <main className="Container__main">{children}</main>
      </div>
    </Root>
  );
};

// Adding proptypes to component
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
