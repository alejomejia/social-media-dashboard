// Importing from packages
import { action } from 'easy-peasy';

const model = {
  // State
  isDarkMode: false,
  // Actions
  handleTheme: action((state, payload) => {
    state.isDarkMode = payload;
  }),
};

export default model;
