import styled from 'styled-components';

export const Root = styled.div`
  // X and Y axis label size
  .recharts-surface {
    font-size: 11px;
    overflow: visible;
  }

  .recharts-active-dot {
    .recharts-dot {
      stroke: ${(props) => props.theme.colors.chart};
    }
  }

  // X and Y axis increase stroke and change color
  .recharts-cartesian {
    &-axis {
      .recharts-cartesian-axis-ticks {
        text {
          fill: #a4a9b6;
        }
      }

      // Removing xAxis 0
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
          stroke: #dbdbdb;

          // Removing first dash line on both axis to avoid overlap in main axis
          &:first-child {
            display: none;
          }
        }
      }
    }
  }
`;
