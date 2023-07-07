/* eslint-disable react/prop-types */
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import propTypes from "prop-types";
import "../css/components/PieChart.css";

export default function ComponentPieChart({ data }) {
  ComponentPieChart.propTypes = {
    data: propTypes.number.isRequired,
  };

  const CustomLegend = ({ payload }) => (
    <div className="piechart-legend">
      <div className="piechart-pourcentage">
        {payload[0].payload.value * 100}%
      </div>
      <div className="piechart-text">de votre objectif</div>
    </div>
  );

  return (
    <div className="pie-graph">
      <h2 className="pie-graph-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 35, right: 35, bottom: 35, left: 35 }}>
          <Pie
            dataKey="value"
            data={[
              { name: "score", value: data },
              { name: "total", value: 1 - data },
            ]}
            cx="50%"
            cy="50%"
            innerRadius={"90%"}
            outerRadius="100%"
            startAngle={90}
            endAngle={450}
            cornerRadius={100}
          >
            <Cell fill="#E60000" stroke="#E60000" />
            <Cell fill="transparent" stroke="transparent" />
          </Pie>
          <Pie
            cx={"50%"}
            cy={"50%"}
            outerRadius={"90%"}
            fill="#FFF"
            data={[{ name: "shadow-circle", value: 100 }]}
            dataKey="value"
          />
          <Legend
            verticalAlign="middle"
            align="center"
            content={CustomLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
