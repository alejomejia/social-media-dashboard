// Importing from packages
import React from 'react';

import {
  ResponsiveContainer,
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
      <ResponsiveContainer width="100%" height={260}>
        <ReactLineChart data={data}>
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
            strokeWidth={1.5}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </ReactLineChart>
      </ResponsiveContainer>
    </Root>
  );
};

export default LineChart;
