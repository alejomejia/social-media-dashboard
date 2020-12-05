// Importing from packages
import { createStore } from 'easy-peasy';

// Importing state and actions model
import model from './model';

// Making global store
const store = createStore(model);

export default store;
