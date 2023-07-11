// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from "react";
// import "../css/pages/Profil.css";
// // import UserDataModel from "../models/user.js";
// import VerticalNavbar from "../components/VerticalNavbar.jsx";
// import DataBox from "../components/MainDataBox.jsx";
// import ComponentBarChart from "../components/BarChart";
// import ComponentLineChart from "../components/LineChart";
// import ComponentRadarChart from "../components/RadarChart";
// import ComponentPieChart from "../components/PieChart";
// import FetchData from "../components/FetchData";

// export default function Profil() {
//   const userId = 12; // L'ID que l'on souhaite utiliser, ici Karl Dovineau
//   // const userId = 18; // L'ID que l'on souhaite utiliser, ici Cecilia Ratorez

//   const url = "http://localhost:3000";

//   const {
//     activity,
//     averageSessions,
//     performance,
//     user,
//     loadingUser,
//     loadingActivity,
//     loadingAverageSessions,
//     loadingPerformance,
//   } = FetchData(url, userId);

//   // const data = FetchData(url, userId);

//   // const [userData, setUserData] = useState(null);
//   // const [dataActivity, setDataActivity] = useState(null);
//   // const [dataSessions, setDataSessions] = useState(null);
//   // const [dataPerfs, setDataPerfs] = useState(null);
//   // const [dataScore, setDataScore] = useState(null);

//   // useEffect(() => {
//   //     setUserData(data.user);
//   //     setDataActivity(data.activity);
//   //     setDataSessions(data.averageSessions);
//   //     setDataPerfs(data.performance);
//   //     setDataScore(data.user);
//   //     console.log(data);
//   // console.log(userData);
//   // console.log(dataActivity);
//   // console.log(dataSessions);
//   // console.log(dataPerfs);

//   // if (data.user.todayScore !== undefined) {
//   //   data.user.score = data.user.todayScore;
//   //   delete data.user.todayScore;
//   //   setDataScore(data.user.score);
//   // } else setDataScore(data.user.score);
//   // }, [data]);

//   // useEffect(() => {
//   //   if (data) {
//   //     console.log(data)
//   //     // const userDataModel = new UserDataModel(data);
//   //     // console.log(userDataModel);

//   //     const userMainData = userDataModel.getUserMainData(userId);
//   //     if (userMainData) {
//   //       setKeyData(userMainData.keyData);
//   //     }

//   //     const userActivity = userDataModel.getUserActivity(userId);
//   //     if (userActivity) {
//   //       setDataActivity(userActivity.sessions);
//   //     }

//   //     const userAverageSessions = userDataModel.getUserAverageSessions(userId);
//   //     if (userAverageSessions) {
//   //       setDataSessions(userAverageSessions.sessions);
//   //     }

//   //     const userPerformance = userDataModel.getUserPerformance(userId);
//   //     if (userPerformance) {
//   //       setDataPerfs(userPerformance);
//   //     }

//   //     const userScore = userMainData ? userMainData.score : null;
//   //     setDataScore(userScore);
//   //   }
//   // }, [data, userId]);

//   // console.log(data);
//   // console.log(userDataModel);
//   // console.log(keyData);

//   // Variable pour afficher le loader
//   // const isLoading = !data;

//   if (
//     loadingUser ||
//     loadingActivity ||
//     loadingAverageSessions ||
//     loadingPerformance
//   ) {
//     return (
//       <>
//         <VerticalNavbar />
//         <div className="loader-container">
//           <img src="/src/assets/img/loader.svg" alt="loader" />
//         </div>
//       </>
//     );
//   } else if (
//     loadingUser === false &&
//     loadingActivity === false &&
//     loadingAverageSessions === false &&
//     loadingPerformance === false
//   ) {
//     return (<>
//       <VerticalNavbar />
//       <div className="profil-container">
//         <div className="profil-container-header">
//           <h1>
//             Bonjour{" "}
//             <span className="redFirstname">
//               {user === undefined ? "En charge" : user.userInfos.firstName}
//             </span>
//           </h1>
//           <p>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
//         </div>

//         <br />
//         <div className="align-container">
//           <div className="graphs-container">

//             <div className="barre-graph-container">
//               <ComponentBarChart data={activity} />
//             </div>
//             <div className="line-graph-container">
//               <ComponentLineChart data={averageSessions} />
//             </div>
//             {/* <div className="radar-graph-container">
//               <ComponentRadarChart data={performance} />
//             </div> */}
//             {/* <div className="pie-graph-container">
//               <ComponentPieChart data={user.todayScore} />
//             </div> */}
//           </div>

//           {/* <div className="data-boxes">
//             <DataBox
//               dataKey={user.keyData.calorieCount}
//               label="Calories"
//               image="/src/assets/img/calories-icon.png"
//               value={user.keyData.calorieCount}
//               unit="kCal"
//             />

//             <DataBox
//               dataKey={user.keyData.proteinCount}
//               label="Proteines"
//               image="/src/assets/img/protein-icon.png"
//               value={user.keyData.proteinCount}
//               unit="g"
//             />

//             <DataBox
//               dataKey={user.keyData.carbohydrateCount}
//               label="Glucides"
//               image="/src/assets/img/carbs-icon.png"
//               value={user.keyData.carbohydrateCount}
//               unit="g"
//             />

//             <DataBox
//               dataKey={user.keyData.lipidCount}
//               label="Lipides"
//               image="/src/assets/img/fat-icon.png"
//               value={user.keyData.lipidCount}
//               unit="g"
//             />
//           </div> */}
//         </div>
//       </div>
//       </>
//     );
//   }
// }

import { useState, useEffect } from "react";
import "../css/pages/Profil.css";
import UserDataModel from "../models/user.js";
import VerticalNavbar from "../components/VerticalNavbar.jsx";
import DataBox from "../components/MainDataBox.jsx";
import ComponentBarChart from "../components/BarChart";
import ComponentLineChart from "../components/LineChart";
import ComponentRadarChart from "../components/RadarChart";
import ComponentPieChart from "../components/PieChart";
import CallAPI from "../components/CallAPI.jsx";

export default function Profil() {
  const userId = 12; // L'ID que l'on souhaite utiliser, ici Karl Dovineau
  // const userId = 18; // L'ID que l'on souhaite utiliser, ici Cecilia Ratorez
  // const apiUrl = `URL_API/user/${userId}`;
  // const data = CallAPI(apiUrl);
  const data = CallAPI(userId);

  const [keyData, setKeyData] = useState(null);
  const [dataActivity, setDataActivity] = useState(null);
  const [dataSessions, setDataSessions] = useState(null);
  const [dataPerfs, setDataPerfs] = useState(null);
  const [dataScore, setDataScore] = useState(null);

  useEffect(() => {
    if (data) {
      const userDataModel = new UserDataModel(data);
      // console.log(userDataModel);

      const userMainData = userDataModel.getUserMainData(userId);
      if (userMainData) {
        setKeyData(userMainData.keyData);
      }

      const userActivity = userDataModel.getUserActivity(userId);
      if (userActivity) {
        setDataActivity(userActivity.sessions);
      }

      const userAverageSessions = userDataModel.getUserAverageSessions(userId);
      if (userAverageSessions) {
        setDataSessions(userAverageSessions.sessions);
      }

      const userPerformance = userDataModel.getUserPerformance(userId);
      if (userPerformance) {
        setDataPerfs(userPerformance);
      }

      const userScore = userMainData ? userMainData.score : null;
      setDataScore(userScore);
    }
  }, [data, userId]);

  console.log(data);
  // console.log(userDataModel);
  // console.log(keyData);

  // Variable pour afficher le loader
  const isLoading = !data || !keyData;

  return (
    <>
      <VerticalNavbar />

      {isLoading ? (
        <div className="loader-container">
          <img src="/src/assets/img/loader.svg" alt="loader" />
        </div>
      ) : (
        <div className="profil-container">
          <div className="profil-container-header">
            <h1>
              Bonjour{" "}
              <span className="redFirstname">
                {data.userMainData.userInfos.firstName}
              </span>
            </h1>
            <p>Félicitation ! vous avez explosé vos objectifs hier 👏</p>
          </div>
          <br />
          <div className="align-container">
            {!isLoading && dataActivity && dataSessions && dataPerfs && (
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
