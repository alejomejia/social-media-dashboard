// Importing from packages
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

// Making LineChart component
const LineChart = () => {
  const data = [
    { days: '0', day: 0, followers: 4 },
    { days: '4', day: 4, followers: 3 },
    { days: '5', day: 5, followers: 2 },
    { days: '6', day: 6, followers: 6 },
    { days: '7', day: 7, followers: 8 },
    { days: '8', day: 8, followers: 9 },
    { days: '9', day: 9, followers: 10 },
    { days: '10', day: 10, followers: 9 },
    { days: '11', day: 11, followers: 10 },
    { days: '12', day: 12, followers: 12 },
    { days: '13', day: 13, followers: 12 },
  ];

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
        <Tooltip />
        <Line
          type="monotone"
          dataKey="followers"
          stroke="hsl(243, 51%, 70%)"
          strokeWidth={1.5}
          dot={{ r: 5 }}
          activeDot={{ r: 5 }}
        />
      </ReactLineChart>
    </Root>
  );
};

export default LineChart;
