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
      border-radius: 16px;

      // Changing with the theme
      background-color: ${(props) => props.theme.colors.backgroundTop};

      &-close {
        position: absolute;
        top: 10px;
        right: 10px;

        &-button {
          cursor: pointer;
          display: flex;
          padding: 20px;
        }

        &-icon {
          max-width: 12px;

          // Changing with the theme
          filter: ${(props) =>
            props.theme.title === 'dark' ? 'invert(1)' : 'initial'};
        }
      }
      &-header {
        padding: 40px 60px 20px;
      }
      &-body {
        padding: 40px 60px;
        border-radius: 16px;

        // Changing with the theme
        background-color: ${(props) => props.theme.colors.background};
      }
    }

    &__title {
      font-size: 27px;
      font-weight: 600;
      margin-bottom: 12px;

      // Changing with the theme
      color: ${(props) => props.theme.colors.textHighlight};

      @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        font-size: 24px;
      }
    }

    &__social {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      &-icon {
        margin-right: 10px;
      }

      &-username {
        font-size: 14px;
        font-weight: 700;
        line-height: 1;

        // Changing with the theme
        color: ${(props) => props.theme.colors.text};
      }
    }

    &__data {
      display: flex;

      &-item {
        display: flex;
        align-items: center;
        max-width: 200px;

        &:first-child {
          width: 180px;
        }

        &:not(:last-child) {
          margin-right: 30px;
        }
      }

      &-quantity {
        display: flex;
        align-items: center;

        &.Modal__data-quantity--up {
          .Modal__data-quantity-number {
            color: ${(props) => props.theme.palette.green};
          }
        }

        &-icon {
          margin-right: 8px;
          height: 6px;
        }

        &-number {
          font-size: 42px;
          font-weight: 600;
          margin-right: 15px;

          // Changing with the theme
          color: ${(props) =>
            props.theme.title === 'dark'
              ? props.theme.colors.textHighlight
              : 'hsl(219 12% 44%)'};
        }
      }

      &-text {
        font-size: 14px;

        // Changing with the theme
        color: ${(props) =>
          props.theme.title === 'dark'
            ? props.theme.colors.textHighlight
            : 'hsl(219deg 6% 49%)'};
      }
    }

    &__date-range {
      font-size: 21px;
      font-weight: 400;
      margin-bottom: 20px;

      // Changing with the theme
      color: ${(props) => props.theme.colors.text};
    }

    &__chart {
    }
  }
`;
