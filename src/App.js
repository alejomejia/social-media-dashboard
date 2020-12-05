// Importing from packages
import { ThemeProvider } from 'styled-components';

// Importing from config folder
import global from './config/themes/global';
import light from './config/themes/light';
import dark from './config/themes/dark';
import GlobalCSS from './config/global-css';

// Importing views
import Dashboard from './views/Dashboard';

function App() {
  return (
    <ThemeProvider theme={global}>
      <ThemeProvider theme={light}>
        <GlobalCSS />
        <Dashboard />
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
