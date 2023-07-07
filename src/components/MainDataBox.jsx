import "/src/css/components/MainDataBox.css";

export default function DataBox({ label, image, value, unit }) {
  const formattedValue = value.toLocaleString("en-US");
  return (
    <div className="data-box">
      <div className="data-box-content">
        <img src={image} alt={label} />
        <div>
          <div className="main-value">
            {formattedValue}
            {unit}
          </div>
          <div className="main-value-name">{label}</div>
        </div>
      </div>
    </div>
  );
}
