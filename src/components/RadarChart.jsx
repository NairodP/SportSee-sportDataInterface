import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from "recharts";
import propTypes from "prop-types";
import "../css/components/RadarChart.css";

export default function ComponentRadarChart({ data }) {
  const kind = data.kind;
  const radarData = data.data;

  const mappedData = radarData.map((item) => ({
    ...item,
    kindName: getFrenchTranslation(kind[item.kind]),
  }));

  function getFrenchTranslation(key) {
    switch (key) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return "";
    }
  }

  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        fill="#FFF"
        fontSize="12px"
        y={y + (y - cy) / 6}
        x={x + (x - cx) / 100}
      >
        {payload.value}
      </Text>
    );
  }

  ComponentRadarChart.propTypes = {
    data: propTypes.object.isRequired,
  };

  return (
    <div className="radar-graph" style={{ height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={mappedData}
          cx="50%"
          cy="50%"
          outerRadius="70%"
          startAngle={210}
          endAngle={570}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kindName"
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
