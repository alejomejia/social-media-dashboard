import styled from 'styled-components';

export const Root = styled.section`
  position: absolute;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  & .Modal {
    &__container {
      display: flex;
      align-items: center;
      max-width: 990px;
      height: 100%;
      margin: 0 auto;
    }

    &__card {
      position: relative;
      width: 100%;
      background-color: ${(props) => props.theme.colors.backgroundTop};
      border-radius: 16px;

      &-close {
        position: absolute;
        top: 20px;
        right: 20px;

        &-button {
        }

        &-icon {
        }
      }
      &-header {
        padding: 40px 60px;
      }
      &-body {
        padding: 40px 60px;
        border-radius: 16px;
        background-color: ${(props) => props.theme.colors.background};
      }
    }
  }
`;
