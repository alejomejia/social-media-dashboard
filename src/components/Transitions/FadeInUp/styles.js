import styled from 'styled-components';

export const Root = styled.div`
  flex: 1 0 20%;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex: 1 0 40%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    flex: 1 0 50%;
  }
`;
