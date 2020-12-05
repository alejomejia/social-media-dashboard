// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root, Wrapper, Main } from './styles';

// Making Container component
const Container = ({ children }) => {
  return (
    <Root className="Container">
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </Root>
  );
};

// Adding proptypes to component
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
