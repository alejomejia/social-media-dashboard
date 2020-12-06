import styled from 'styled-components';

export const Root = styled.div`
  & h1 {
    font-size: 27px;
    font-weight: 600;

    // Changing with the theme
    color: ${(props) => props.theme.colors.textHighlight};
    transition: ${(props) => props.theme.transitions('color')};

    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: 24px;
    }
  }

  & h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;

    // Changing with the theme
    color: ${(props) =>
      props.theme.title === 'dark'
        ? props.theme.colors.textHighlight
        : props.theme.colors.text};
    transition: ${(props) => props.theme.transitions('color')};

    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: 21px;
    }
  }

  & span {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    margin-top: 3px;

    // Changing with the theme
    color: ${(props) => props.theme.colors.text};
    transition: ${(props) => props.theme.transitions('color')};
  }
`;
