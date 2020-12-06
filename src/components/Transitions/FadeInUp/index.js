// Importing from packages
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

// Importing elements from styles
import { Root } from './styles';

// Making FadeInUp component
const FadeInUp = ({ delay = 50, children }) => {
  // Animate Root from styled-components
  const AnimatedRoot = animated(Root);

  // Adding attributes to transition
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      duration: 350,
    },
    delay,
  });

  return (
    <AnimatedRoot className="FadeInUp" style={props}>
      {children}
    </AnimatedRoot>
  );
};

// Adding proptypes to component
FadeInUp.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default FadeInUp;
