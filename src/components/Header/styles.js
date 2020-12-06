import styled from 'styled-components';

export const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
