import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;

    &:before,
    &:after{
      box-sizing: border-box;
    }
  }

  html,
  body{
    overflow-x: hidden;
  }

  body{
    position: relative;
    font-family: 'Inter', 'Verdana', sans-serif;
    font-size: 16px;

    // Changing with the theme
    background-color: ${(props) => props.theme.colors.background};
    transition: ${(props) => props.theme.transitions('background-color')};
  }

  button{
    border: 0;
    background-color: inherit;
    
    &:focus{
      outline: 0;
    }
  }
`;

export default GlobalCSS;
