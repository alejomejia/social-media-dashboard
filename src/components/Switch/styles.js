import styled from 'styled-components';

export const Root = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-bottom: 20px;
  }

  // Hover effect to change Switcher bg from static color to gradient
  &:hover {
    & .Switch__switcher {
      &:after {
        opacity: 1;
      }
    }
  }

  .Switch {
    &__label {
      font-size: 14px;
      font-weight: 600;
      margin-right: 16px;
      transition: ${(props) => props.theme.transitions('color')};

      // Changes depending on Dark Mode
      color: ${(props) =>
        props.theme.title === 'dark'
          ? props.theme.colors.textHighlight
          : props.theme.colors.text};
    }

    &__switcher {
      position: relative;
      z-index: 1;
      overflow: hidden;
      width: 56px;
      height: 28px;
      background: ${(props) => props.theme.colors.toggle};
      border-radius: 50px;
      transition: ${(props) => props.theme.transitions('background')};

      &:before {
        content: '';
        position: absolute;
        z-index: 5;
        top: calc(50% - 10px);
        left: 0;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;

        // Starting point 32px to 4px to move from right to left
        transform: ${(props) =>
          props.theme.title === 'dark'
            ? 'translateX(4px)'
            : 'translateX(32px)'};
        transition: ${(props) => props.theme.transitions('transform')};
      }

      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${(props) => props.theme.colors.toggleHover};

        // Transition to change the background color on the switcher
        opacity: 0;
        transition: ${(props) => props.theme.transitions('opacity')};
      }
    }
  }
`;
