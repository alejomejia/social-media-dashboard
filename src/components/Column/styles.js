import styled from 'styled-components';

export const Root = styled.div`
  padding: 0 15px;

  // Smartphones
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0 7.5px;
  }
`;
