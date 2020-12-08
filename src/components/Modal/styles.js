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
      max-width: 1030px;
      height: 100%;
      padding: 0 20px;
      margin: 0 auto;

      // Tablets
      @media (max-width: ${(props) => props.theme.breakpoints.m}) {
        align-items: flex-start;
        padding: 40px 20px;
      }
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

      // Wrapper to allow scroll on low height viewports
      &-wrapper {
        overflow-x: hidden;
        overflow-y: scroll;
        border-radius: 16px;

        // Smartphones
        @media (max-width: ${(props) => props.theme.breakpoints.s}) {
          max-height: calc(100vh - 80px);
        }
      }

      &-header {
        padding: 40px 60px 20px;

        // Smartphones
        @media (max-width: ${(props) => props.theme.breakpoints.s}) {
          padding: 30px 30px 20px;
        }
      }
      &-body {
        padding: 40px 60px;
        border-radius: 16px;

        // Changing with the theme
        background-color: ${(props) => props.theme.colors.background};

        // Smartphones
        @media (max-width: ${(props) => props.theme.breakpoints.s}) {
          padding: 30px;
        }
      }
    }

    &__title {
      font-size: 27px;
      font-weight: 600;
      margin-bottom: 12px;

      // Changing with the theme
      color: ${(props) => props.theme.colors.textHighlight};

      // xs Smartphones
      @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        font-size: 24px;
      }
    }

    &__social {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      // Smartphones
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        margin-bottom: 20px;
      }

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

      // Smartphones
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        flex-wrap: wrap;
      }

      &-item {
        display: flex;
        align-items: center;
        max-width: 200px;

        // Smartphones
        @media (max-width: ${(props) => props.theme.breakpoints.s}) {
          max-width: 100%;
        }

        &:first-child {
          width: 180px;

          // Smartphones
          @media (max-width: ${(props) => props.theme.breakpoints.s}) {
            width: inherit;
          }
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

          // Smartphones
          @media (max-width: ${(props) => props.theme.breakpoints.s}) {
            font-size: 36px;
          }
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
