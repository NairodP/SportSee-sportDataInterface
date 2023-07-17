/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../css/pages/Profil.css";
import VerticalNavbar from "../components/VerticalNavbar.jsx";
import DataBox from "../components/MainDataBox.jsx";
import ComponentBarChart from "../components/BarChart";
import ComponentLineChart from "../components/LineChart";
import ComponentRadarChart from "../components/RadarChart";
import ComponentPieChart from "../components/PieChart";

import FakeCallAPI from "../components/FakeCallAPI.jsx"; // Data Locale
import LocalUserDataModel from "../models/localUser.js"; // Data Locale

import UserDataModel from "../models/user.js"; // API
import FetchData from "../components/FetchData"; // API

export default function Profil() {
  const [firstname, setFirstname] = useState();
  const [keyData, setKeyData] = useState(null);
  const [dataActivity, setDataActivity] = useState(null);
  const [dataSessions, setDataSessions] = useState(null);
  const [dataPerfs, setDataPerfs] = useState(null);
  const [dataScore, setDataScore] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const userId = 12; // L'ID que l'on souhaite utiliser, ici Karl Dovineau
  // const userId = 18; // L'ID que l'on souhaite utiliser, ici Cecilia Ratorez

  const url = `http://localhost:3000`;

  const data = FakeCallAPI(userId); // Data Locale
  // const data = FetchData(url, userId); // API


  useEffect(() => {
    if (data) {
      const userDataModel = new LocalUserDataModel(data); // Data Locale
      // const userDataModel = new UserDataModel(data); // API

      // console.log(userDataModel);
      // console.log(userDataModel);

      const userMainData = userDataModel.getUserMainData(userId);
      if (userMainData) {
        setKeyData(userMainData.keyData);
        setDataScore(userMainData.score);
        setFirstname(userMainData.userInfos);
      }

      const userActivity = userDataModel.getUserActivity(userId);
      if (userActivity) {
        setDataActivity(userActivity);
      }

      const userAverageSessions =
        userDataModel.getUserAverageSessions(userId);
      if (userAverageSessions) {
        setDataSessions(userAverageSessions);
      }

      const userPerformance = userDataModel.getUserPerformance(userId);
      if (userPerformance) {
        setDataPerfs(userPerformance);
      }

      setIsDataLoaded(true);
    }
  }, [data, userId]);

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

// import { useState, useEffect } from "react";
// import "../css/pages/Profil.css";
// import VerticalNavbar from "../components/VerticalNavbar.jsx";
// import DataBox from "../components/MainDataBox.jsx";
// import ComponentBarChart from "../components/BarChart";
// import ComponentLineChart from "../components/LineChart";
// import ComponentRadarChart from "../components/RadarChart";
// import ComponentPieChart from "../components/PieChart";

// import FetchData from "../components/FetchData";
// import UserDataModel from "../models/user.js";

// export default function Profil() {
//   const [firstname, setFirstname] = useState();
//   const [keyData, setKeyData] = useState(null);
//   const [dataActivity, setDataActivity] = useState(null);
//   const [dataSessions, setDataSessions] = useState(null);
//   const [dataPerfs, setDataPerfs] = useState(null);
//   const [dataScore, setDataScore] = useState(null);
//   const [isDataLoaded, setIsDataLoaded] = useState(false);

//   const userId = 12; // L'ID que l'on souhaite utiliser, ici Karl Dovineau
//   // const userId = 18; // L'ID que l'on souhaite utiliser, ici Cecilia Ratorez

//   const apiUrl = "http://localhost:3000";
//   const apiData = FetchData(apiUrl, userId);

//   useEffect(() => {
//     if (apiData) {
//       const userDataModel = new UserDataModel(apiData);

//       const userMainData = userDataModel.getUserMainData();
//       if (userMainData) {
//         setKeyData(userMainData.keyData);
//         setDataScore(userMainData.score);
//         setFirstname(userMainData.userInfos);
//       }

//       const userActivity = userDataModel.getUserActivity();
//       if (userActivity) {
//         setDataActivity(userActivity);
//       }

//       const userAverageSessions = userDataModel.getUserAverageSessions();
//       if (userAverageSessions) {
//         setDataSessions(userAverageSessions);
//       }

//       const userPerformance = userDataModel.getUserPerformance();
//       if (userPerformance) {
//         setDataPerfs(userPerformance);
//       }

//       setIsDataLoaded(true);
//     }
//   }, [apiData]);

//   return (
//     <>
//       <VerticalNavbar isDataLoaded={isDataLoaded} />

//       {!isDataLoaded ? (
//         <div className="loader-container">
//           <img src="/src/assets/img/loader.svg" alt="loader" />
//         </div>
//       ) : (
//         <>
//           {keyData &&
//             dataActivity &&
//             dataSessions &&
//             dataPerfs &&
//             dataScore &&
//             firstname && (
//               <div className="profil-container">
//                 <div className="profil-container-header">
//                   <h1>
//                     Bonjour{" "}
//                     <span className="redFirstname">{firstname.firstName}</span>
//                   </h1>
//                   <p>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
//                 </div>
//                 <br />
//                 <div className="align-container">
//                   <div className="graphs-container">
//                     <div className="barre-graph-container">
//                       <ComponentBarChart data={dataActivity} />
//                     </div>
//                     <div className="line-graph-container">
//                       <ComponentLineChart data={dataSessions} />
//                     </div>
//                     <div className="radar-graph-container">
//                       <ComponentRadarChart data={dataPerfs} />
//                     </div>
//                     <div className="pie-graph-container">
//                       <ComponentPieChart data={dataScore} />
//                     </div>
//                   </div>

//                   <div className="data-boxes">
//                     <DataBox
//                       dataKey={keyData.calorieCount}
//                       label="Calories"
//                       image="/src/assets/img/calories-icon.png"
//                       value={keyData.calorieCount}
//                       unit="kCal"
//                     />

//                     <DataBox
//                       dataKey={keyData.proteinCount}
//                       label="Proteines"
//                       image="/src/assets/img/protein-icon.png"
//                       value={keyData.proteinCount}
//                       unit="g"
//                     />

//                     <DataBox
//                       dataKey={keyData.carbohydrateCount}
//                       label="Glucides"
//                       image="/src/assets/img/carbs-icon.png"
//                       value={keyData.carbohydrateCount}
//                       unit="g"
//                     />

//                     <DataBox
//                       dataKey={keyData.lipidCount}
//                       label="Lipides"
//                       image="/src/assets/img/fat-icon.png"
//                       value={keyData.lipidCount}
//                       unit="g"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//         </>
//       )}
//     </>
//   );
// }
