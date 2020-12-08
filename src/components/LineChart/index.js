// Importing from packages
import React from 'react';

import {
  LineChart as ReactLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

// Importing elements from styles
import { Root } from './styles';

// Importing data
import data from '../../data/chart.json';

// Making LineChart component
const LineChart = () => {
  // Setting Y axis manually
  const setYAxisTicks = ['0', '2', '4', '6', '8', '10', '12'];

  return (
    <Root className="LineChart">
      <ReactLineChart width={870} height={240} data={data}>
        <XAxis tickCount={1} tickSize={15} tickLine={false} dataKey="days" />
        <YAxis
          width={25}
          tickSize={10}
          ticks={setYAxisTicks}
          minTickGap={10}
          tickLine={false}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={(value, name) => `${value} new ${name}`} />
        <Line
          type="monotone"
          dataKey="followers"
          stroke="hsl(243, 51%, 70%)"
          strokeWidth={1.5}
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
      </ReactLineChart>
    </Root>
  );
};

export default LineChart;
