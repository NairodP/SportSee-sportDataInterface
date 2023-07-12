import { useState, useEffect } from "react";
import "../css/pages/Profil.css";
import LocalUserDataModel from "../models/localUser.js";
import UserDataModel from "../models/user.js";
import VerticalNavbar from "../components/VerticalNavbar.jsx";
import DataBox from "../components/MainDataBox.jsx";
import ComponentBarChart from "../components/BarChart";
import ComponentLineChart from "../components/LineChart";
import ComponentRadarChart from "../components/RadarChart";
import ComponentPieChart from "../components/PieChart";
import FakeCallAPI from "../components/FakeCallAPI.jsx";
import FetchData from "../components/FetchData";

export default function Profil() {

  // Pour utiliser les datas de l'API, initier la variable "dataAPI" à "true" sinon "false".
  const dataAPI = true;

  const [keyData, setKeyData] = useState(null);
  const [dataActivity, setDataActivity] = useState(null);
  const [dataSessions, setDataSessions] = useState(null);
  const [dataPerfs, setDataPerfs] = useState(null);
  const [dataScore, setDataScore] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const userId = 12; // L'ID que l'on souhaite utiliser, ici Karl Dovineau
  // const userId = 18; // L'ID que l'on souhaite utiliser, ici Cecilia Ratorez

  // API
  const url = `http://localhost:3000`;
  const apiData = FetchData(url, userId);

  useEffect(() => {
    if (apiData) {
      const userDataModel = new UserDataModel(apiData);
      console.log(userDataModel);
    }
  }, [apiData]);

  // datas locales
  const localData = FakeCallAPI(userId);

  useEffect(() => {
    if (localData) {
      const localUserDataModel = new LocalUserDataModel(localData);
      console.log(localUserDataModel);

      const userMainData = localUserDataModel.getUserMainData(userId);
      if (userMainData) {
        setKeyData(userMainData.keyData);
      }

      const userActivity = localUserDataModel.getUserActivity(userId);
      if (userActivity) {
        setDataActivity(userActivity);
      }

      const userAverageSessions =
        localUserDataModel.getUserAverageSessions(userId);
      if (userAverageSessions) {
        setDataSessions(userAverageSessions);
      }

      const userPerformance = localUserDataModel.getUserPerformance(userId);
      if (userPerformance) {
        setDataPerfs(userPerformance);
      }

      const userScore = userMainData ? userMainData.score : null;
      setDataScore(userScore);

      setIsDataLoaded(true);
    }
  }, [localData, userId]);

  return (
    <>
      <VerticalNavbar isDataLoaded={isDataLoaded} />

      {!isDataLoaded ? (
        <div className="loader-container">
          <img src="/src/assets/img/loader.svg" alt="loader" />
        </div>
      ) : (
        <div className="profil-container">
          <div className="profil-container-header">
            <h1>
              Bonjour{" "}
              <span className="redFirstname">
                {localData.userMainData.userInfos.firstName}
              </span>
            </h1>
            <p>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
          </div>
          <br />
          <div className="align-container">
            {isDataLoaded && dataActivity && dataSessions && dataPerfs && (
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
            )}

            {keyData && (
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
            )}
          </div>
        </div>
      )}
    </>
  );
}
