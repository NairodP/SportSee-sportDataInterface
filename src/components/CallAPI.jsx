// Avec APPEL à l'API (encore à tester)

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function CallAPI(apiUrl) {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         const data = response.data;
//         const userModel = new UserDataModel(data);
//         setUserData(userModel);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   return userData;
// }

// Avec data locale dans assets/dataMocking/data.js sans APPEL à l'API (encore à tester)

import { useState, useEffect } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../assets/dataMocking/data.js';

export default function CallAPI(userId) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simuler un délai d'attente pour simuler l'appel à l'API
      setTimeout(() => {
        const filteredData = {
          userMainData: USER_MAIN_DATA.find(user => user.id === userId),
          userActivity: USER_ACTIVITY.find(user => user.userId === userId),
          userAverageSessions: USER_AVERAGE_SESSIONS.find(user => user.userId === userId),
          userPerformance: USER_PERFORMANCE.find(user => user.userId === userId)
        };
        setApiData(filteredData);
      }, 1000);
    };

    fetchData();
  }, [userId]);

  return apiData;
}
