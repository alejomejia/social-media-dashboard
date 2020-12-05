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
    background-color: ${(props) => props.theme.colors.backgroundTop};
    border-radius: 0 0 20px 20px;
    transition: background-color 0.35s ease;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Main = styled.main``;
