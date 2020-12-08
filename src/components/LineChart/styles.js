import styled from 'styled-components';

export const Root = styled.div`
  // X and Y axis label size
  .recharts-surface {
    font-size: 11px;
    overflow: visible;
  }

  // Add theme chart color to active dots in the chart
  .recharts-active-dot {
    .recharts-dot {
      // Changing with the theme
      stroke: ${(props) => props.theme.colors.chart};
      fill: ${(props) => props.theme.colors.chart};
    }
  }

  // Recharts theme line
  .recharts-line {
    &-curve {
      // Changing with the theme
      stroke: ${(props) => props.theme.colors.chart};
    }

    &-dots {
      circle {
        // Changing with the theme
        stroke: ${(props) => props.theme.colors.chart};
        fill: ${(props) => props.theme.colors.background};
      }
    }
  }

  // Styling tooltip to match design
  .recharts-tooltip {
    &-label,
    &-item-name,
    &-item-separator {
      display: none;
    }

    // Removing hover effect on the CartesianGrid vertical lines
    &-cursor {
      stroke-width: 0;
    }

    &-wrapper {
      .recharts-default-tooltip {
        padding: 4px 10px !important;

        // Changing with the theme
        background-color: ${(props) =>
          props.theme.colors.background} !important;
        border-color: ${(props) =>
          props.theme.title === 'dark'
            ? props.theme.colors.chart
            : '#ccc'} !important;
      }
    }

    &-item-list {
      font-size: 13px;
      color: red;
    }

    &-item {
      span {
        // Changing with the theme
        color: ${(props) => props.theme.colors.chart};
      }
    }
  }

  // X and Y axis base line increase stroke and change color
  .recharts-cartesian {
    &-axis {
      .recharts-cartesian-axis-ticks {
        text {
          fill: #a4a9b6;
        }
      }

      // Removing xAxis first label (0)
      &.xAxis {
        .recharts-cartesian-axis-ticks {
          g {
            &:first-child {
              display: none;
            }
          }
        }
      }

      // X and Y axis base line color
      & line {
        stroke: #bac0d0;
      }
    }

    &-grid {
      &-horizontal,
      &-vertical {
        // Changing color of the dashed grid lines inside CartesianGrid
        & line {
          stroke: ${(props) =>
            props.theme.title === 'dark' ? '#5d5f63' : '#dbdbdb'} !important;

          // Removing first dash line on both axis to avoid overlap in main axis
          &:first-child {
            display: none;
          }
        }
      }
    }
  }
`;
