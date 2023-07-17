/* eslint-disable react/prop-types */
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";
import propTypes from "prop-types";
import "../css/components/BarChart.css";

export default function ComponentBarChart({ data }) {
  // propTypes
  ComponentBarChart.propTypes = {
    data: propTypes.array.isRequired,
  };

  const CustomTooltip = ({ active, payload }) => {
    // console.log(payload);
    // console.log(active);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip custom-bar">
          <div className="data-kg">{`${payload[0].value}Kg`}</div>
          <div className="data-cal">{`${payload[1].value}kCal`}</div>
        </div>
      );
    }
  };

  return (
    <div className="barre-graph">
      <h2 className="barre-graph-title">Activité quotidienne</h2>
      <ul className="barre-graph-legend">
        <li>Poids (kg)</li>
        <li>Calories brûlées (kcal)</li>
      </ul>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={16}
            tickSize={0}
            tickFormatter={(item) => new Date(item).getDate()}
          />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            tickMargin={40}
            tickSize={0}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis
            dataKey="calories"
            yAxisId="calories"
            hide
            orientation="right"
            domain={["dataMin-100", "dataMax+10"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            radius={[4, 4, 0, 0]}
            barSize={10}
          />
          <Bar dataKey="calories" fill="transparent" barSize={3} />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#e60000"
            radius={[4, 4, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
