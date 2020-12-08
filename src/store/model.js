// Importing from packages
import { action } from 'easy-peasy';

// Detect if pc is using dark mode to enable as default
const detectDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  .matches;

const model = {
  // State
  isDarkMode: detectDarkMode,
  isModalOpen: true,
  // Actions
  handleTheme: action((state, payload) => {
    state.isDarkMode = payload;
  }),
  handleModalOpen: action((state, payload) => {
    state.isModalOpen = payload;
  }),
};

export default model;
