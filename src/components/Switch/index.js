// Importing from packages
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root, Label, Switcher } from './styles';

// Making Switch component
const Switch = ({ label }) => {
  const handleClick = () => {
    console.log('Switch working!');
  };

  return (
    <Root className="Switch" onClick={handleClick}>
      <Label>{label}</Label>
      <Switcher className="Switch--switcher"></Switcher>
    </Root>
  );
};

// Adding proptypes to component
Switch.propTypes = {
  label: PropTypes.string,
};

export default Switch;
