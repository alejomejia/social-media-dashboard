import { ThemeProvider } from 'styled-components';
import light from './config/themes/light';
import dark from './config/themes/dark';
import GlobalCSS from './config/global-css';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalCSS />
      <div className="App">
        <header className="App-header">Hello MakingSense!</header>
      </div>
    </ThemeProvider>
  );
}

export default App;
