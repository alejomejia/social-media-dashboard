import styled from 'styled-components';

export const Root = styled.article`
  &.SmallCard {
    cursor: pointer;
    margin-bottom: 25px;

    // Hover effect
    transform: translateY(0);
    transition: ${(props) => props.theme.transitions('transform')},
      ${(props) => props.theme.transitions('color')};

    &:hover {
      transform: translateY(-5px);

      & .SmallCard__wrapper {
        background-color: ${(props) => props.theme.colors.cardBgHover};
      }
    }

    // Smartphones
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      margin-bottom: 15px;
    }
  }

  .SmallCard {
    &__wrapper {
      padding: 20px 25px;
      border-radius: 8px;

      // Changing with the theme and on hover
      background-color: ${(props) => props.theme.colors.cardBg};
      transition: ${(props) => props.theme.transitions('background-color')};
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 20px;
      margin-bottom: 25px;

      &-title {
        font-size: 14px;
        font-weight: 700;

        // Changing with the theme
        color: ${(props) => props.theme.colors.text};
        transition: ${(props) => props.theme.transitions('color')};
      }

      &-icon {
      }
    }

    &__footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      &-quantity {
        font-size: 32px;
        font-weight: 700;

        // Changing with the theme
        color: ${(props) => props.theme.colors.textHighlight};
        transition: ${(props) => props.theme.transitions('color')};
      }

      &-percent {
        display: flex;
        align-items: center;

        &--up {
          .SmallCard__type-percent {
            color: ${(props) => props.theme.palette.green};
          }
        }

        &--down {
          .SmallCard__type-percent {
            color: ${(props) => props.theme.palette.red};
          }
        }

        .SmallCard__type {
          &-icon {
            margin-right: 3px;
          }
          &-percent {
            font-size: 12px;
            font-weight: 700;
          }
        }
      }
    }

    /*** ASDASDADS ****/

    &__social {
      display: flex;
      align-items: center;

      &-wrapper {
        display: flex;
        margin-right: 8px;
      }

      &-icon {
      }

      &-username {
        font-size: 14px;
        font-weight: 600;
        line-height: 1;

        // Changing with the theme
        color: ${(props) => props.theme.colors.text};
        transition: ${(props) => props.theme.transitions('color')};
      }
    }

    &__followers {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;

      &-quantity {
        font-size: 58px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 5px;

        // Changing with the theme
        color: ${(props) => props.theme.colors.textHighlight};
        transition: ${(props) => props.theme.transitions('color')};
      }

      &-text {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 5px;

        // Changing with the theme
        color: ${(props) => props.theme.colors.text};
        transition: ${(props) => props.theme.transitions('color')};
      }
    }

    &__today {
      display: flex;
      align-items: center;

      &--up {
        .SmallCard__today-quantity,
        .SmallCard__today-text {
          color: ${(props) => props.theme.palette.green};
        }
      }

      &--down {
        .SmallCard__today-quantity,
        .SmallCard__today-text {
          color: ${(props) => props.theme.palette.red};
        }
      }

      &-icon {
      }

      &-quantity {
        margin: 0 3px;
      }

      &-quantity,
      &-text {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
