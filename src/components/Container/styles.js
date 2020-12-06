import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  z-index: 1;

  // Adding top bg pattern
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 250px;
    border-radius: 0 0 20px 20px;

    // Changing with the theme
    background-color: ${(props) => props.theme.colors.backgroundTop};
    transition: ${(props) => props.theme.transitions('background-color')};
  }

  & .Container {
    &__wrapper {
      max-width: 1140px;
      min-height: 100vh;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
`;
