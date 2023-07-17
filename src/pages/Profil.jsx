import { useState, useEffect } from "react";
import "../css/pages/Profil.css";
import VerticalNavbar from "../components/VerticalNavbar.jsx";
import DataBox from "../components/MainDataBox.jsx";
import ComponentBarChart from "../components/BarChart";
import ComponentLineChart from "../components/LineChart";
import ComponentRadarChart from "../components/RadarChart";
import ComponentPieChart from "../components/PieChart";
import FetchData from "../services/FetchData"; // API

export default function Profil() {
  const url = import.meta.env.VITE_API_URL;
  const userId = parseInt(import.meta.env.VITE_USER_ID);

  // State
  const [firstname, setFirstname] = useState("");
  const [keyData, setKeyData] = useState(null);
  const [dataActivity, setDataActivity] = useState(null);
  const [dataSessions, setDataSessions] = useState(null);
  const [dataPerfs, setDataPerfs] = useState(null);
  const [dataScore, setDataScore] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const data = FetchData({ url: url, userId: userId });

  useEffect(() => {
    if (
      data &&
      data.userMainData &&
      data.userActivity &&
      data.userAverageSessions &&
      data.userPerformance
    ) {
      // console.log(data);
      setKeyData(data.userMainData.keyData);
      setDataScore(data.userMainData.score);
      setFirstname(data.userMainData.userInfos);
      setDataActivity(data.userActivity);
      setDataSessions(data.userAverageSessions);
      setDataPerfs(data.userPerformance);
      setIsDataLoaded(true);
    }
  }, [data]);

  return (
    <>
      <VerticalNavbar isDataLoaded={isDataLoaded} />

      {!isDataLoaded ? (
        <div className="loader-container">
          <img src="/src/assets/img/loader.svg" alt="loader" />
        </div>
      ) : (
        <>
          {keyData &&
            dataActivity &&
            dataSessions &&
            dataPerfs &&
            dataScore &&
            firstname && (
              <div className="profil-container">
                <div className="profil-container-header">
                  <h1>
                    Bonjour{" "}
                    <span className="redFirstname">{firstname.firstName}</span>
                  </h1>
                  <p>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
                </div>
                <br />
                <div className="align-container">
                  <div className="graphs-container">
                    <div className="barre-graph-container">
                      <ComponentBarChart data={dataActivity} />
                    </div>
                    <div className="line-graph-container">
                      <ComponentLineChart data={dataSessions} />
                    </div>
                    <div className="radar-graph-container">
                      <ComponentRadarChart data={dataPerfs} />
                    </div>
                    <div className="pie-graph-container">
                      <ComponentPieChart data={dataScore} />
                    </div>
                  </div>

                  <div className="data-boxes">
                    <DataBox
                      dataKey={keyData.calorieCount}
                      label="Calories"
                      image="/src/assets/img/calories-icon.png"
                      value={keyData.calorieCount}
                      unit="kCal"
                    />

                    <DataBox
                      dataKey={keyData.proteinCount}
                      label="Proteines"
                      image="/src/assets/img/protein-icon.png"
                      value={keyData.proteinCount}
                      unit="g"
                    />

                    <DataBox
                      dataKey={keyData.carbohydrateCount}
                      label="Glucides"
                      image="/src/assets/img/carbs-icon.png"
                      value={keyData.carbohydrateCount}
                      unit="g"
                    />

                    <DataBox
                      dataKey={keyData.lipidCount}
                      label="Lipides"
                      image="/src/assets/img/fat-icon.png"
                      value={keyData.lipidCount}
                      unit="g"
                    />
                  </div>
                </div>
              </div>
            )}
        </>
      )}
    </>
  );
}
