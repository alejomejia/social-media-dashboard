import styled from 'styled-components';

export const Root = styled.article`
  &.SmallCard {
    cursor: pointer;
    flex: 1;

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

    // Social card border
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 8px 8px 0 0;
    }

    &--facebook {
      &:before {
        background-color: ${(props) => props.theme.brands.facebook};
      }
    }
    &--twitter {
      &:before {
        background-color: ${(props) => props.theme.brands.twitter};
      }
    }
    &--instagram {
      &:before {
        background-image: ${(props) => props.theme.brands.instagram};
      }
    }
    &--youtube {
      &:before {
        background-color: ${(props) => props.theme.brands.youtube};
      }
    }
  }

  .SmallCard {
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
      border-radius: 0 0 8px 8px;

      // Changing with the theme and on hover
      background-color: ${(props) => props.theme.colors.cardBg};
      transition: ${(props) => props.theme.transitions('background-color')};
    }

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
