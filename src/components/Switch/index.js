// Importing from packages
import { useStoreState, useStoreActions } from 'easy-peasy';
import PropTypes from 'prop-types';

// Importing elements from styles
import { Root, Label, Switcher } from './styles';

// Making Switch component
const Switch = ({ label }) => {
  // Getting state and action from global store to modify the theme
  const isDarkMode = useStoreState((state) => state.isDarkMode);
  const handleTheme = useStoreActions((actions) => actions.handleTheme);

  // Changing the theme value in the global store as a toggle
  const handleClick = () => {
    handleTheme(!isDarkMode);
  };

  return (
    <Root className="Switch" onClick={handleClick} isDarkMode={isDarkMode}>
      <Label className="Switch--label">{label}</Label>
      <Switcher className="Switch--switcher"></Switcher>
    </Root>
  );
};

// Adding proptypes to component
Switch.propTypes = {
  label: PropTypes.string,
};

export default Switch;
