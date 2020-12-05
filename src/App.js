// Importing from packages
import { ThemeProvider } from 'styled-components';

// Importing from config folder
import GLOBAL from './config/themes/global';
import LIGHT from './config/themes/light';
import DARK from './config/themes/dark';
import GlobalCSS from './config/global-css';

// Importing views
import Dashboard from './views/Dashboard';

function App() {
  return (
    <ThemeProvider theme={GLOBAL}>
      <ThemeProvider theme={LIGHT}>
        <GlobalCSS />
        <Dashboard />
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
