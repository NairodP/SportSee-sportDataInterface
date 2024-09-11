/* Début sans APPEL à l'API */
import { useState, useEffect } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/dataMocking/data.js";
import UserDataModel from "../models/data.js";

export default function FetchData({ userId }) {
  const [localData, setLocalData] = useState();

  useEffect(() => {
    function fetchData() {
      // Simuler un délai d'attente pour simuler l'appel à l'API
      setTimeout(() => {
        const filteredData = {
          user: USER_MAIN_DATA.find(
            (user) => user.id === userId
          ),
          activity: USER_ACTIVITY.find(
            (user) => user.userId === userId
          ).sessions,
          averageSessions: USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === userId
          ).sessions,
          performance: USER_PERFORMANCE.find(
            (user) => user.userId === userId
          ),
        };

        const userDataModel = new UserDataModel(filteredData);
        const userMainData = userDataModel.getUserMainData();
        const userActivity = userDataModel.getUserActivity();
        const userAverageSessions =
          userDataModel.getUserAverageSessions();
        const userPerformance = userDataModel.getUserPerformance();

        setLocalData({
          userMainData,
          userActivity,
          userAverageSessions,
          userPerformance,
        });
      }, 1000);
    }

    fetchData();
  }, [userId]);

  return localData;
}
/* Fin sans APPEL à l'API */


/* Début avec APPEL à l'API */
// import CallAPI from "../hooks/useFetch";
// import UserDataModel from "../models/data";
// import { useEffect, useState } from "react";

// export default function FetchData({ url, userId }) {
//   const [apiData, setApiData] = useState(null);
//   const [isDataProcessed, setIsDataProcessed] = useState(false);
//   const data = CallAPI({ url, userId });

//   useEffect(() => {
//     if (
//       data &&
//       data.user &&
//       data.performance &&
//       data.averageSessions.length !== 0 &&
//       data.activity.length !== 0 &&
//       !isDataProcessed
//     ) {
//       const userDataModel = new UserDataModel(data);
//       const formattedData = {
//         userMainData: userDataModel.getUserMainData(),
//         userActivity: userDataModel.getUserActivity(),
//         userAverageSessions: userDataModel.getUserAverageSessions(),
//         userPerformance: userDataModel.getUserPerformance(),
//       };
//       setApiData(formattedData);
//       setIsDataProcessed(true);
//     }
//   }, [data, isDataProcessed]);

//   return apiData;
// }
/* Fin avec APPEL à l'API */