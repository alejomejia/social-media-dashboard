import styled from 'styled-components';

export const Root = styled.section`
  & .Section {
    color: red;

    &__row {
      display: grid;
      padding-bottom: 30px;
      margin: 0 -15px;

      // Desktop
      grid-template-columns: repeat(${(props) => props.l}, 1fr);

      // Tablets
      @media (max-width: ${(props) => props.theme.breakpoints.m}) {
        grid-template-columns: repeat(${(props) => props.m}, 1fr);
      }

      // Smartphones
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        grid-template-columns: repeat(${(props) => props.s}, 1fr);
      }

      // Small phones
      @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        grid-template-columns: repeat(${(props) => props.xs}, 1fr);
      }
    }
  }
`;
