import { ThemeProvider } from 'styled-components';
import light from './config/themes/light';
import dark from './config/themes/dark';
import GlobalCSS from './config/global-css';

import Container from './components/Container';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalCSS />
      <Container>Test</Container>
    </ThemeProvider>
  );
}

export default App;
