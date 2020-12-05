import styled from 'styled-components';

export const Root = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    & .Switch--switcher {
      &:after {
        opacity: 1;
      }
    }
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-right: 16px;
`;

export const Switcher = styled.div`
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
    top: calc(50% - 10px);
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;

    // Starting point 32px to 4px to move from right to left
    transform: translateX(32px);
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
`;
