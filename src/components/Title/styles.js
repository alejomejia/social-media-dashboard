import styled from 'styled-components';

export const Root = styled.div`
  & h1 {
    color: ${(props) => props.theme.colors.textHighlight};
    font-size: 27px;
    font-weight: 700;
    transition: ${(props) => props.theme.transitions('color')};
  }

  & span {
    display: inline-block;
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    font-weight: 600;
    margin-top: 3px;
    transition: ${(props) => props.theme.transitions('color')};
  }
`;
