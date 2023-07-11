/* eslint-disable react-hooks/exhaustive-deps */
// Hook Api
import Fetch from "./Fetch";
import { useEffect, useState } from "react";

const FetchData = (url, userId) => {

  const [user, setUser] = useState();
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState({});
  const [performanceKind, setPerformanceKind] = useState();

  const { isLoading: loadingUser, axiosRequest: fetchUser } = Fetch(
    `${url}/user/${userId}/`
  );
  
  const { isLoading: loadingActivity, axiosRequest: fetchActivity } = Fetch(
    `${url}/user/${userId}/activity`
  );

  const {
    isLoading: loadingAverageSessions,
    axiosRequest: fetchAverageSessions,
  } = Fetch(`${url}/user/${userId}/average-sessions`);

  const { isLoading: loadingPerformance, axiosRequest: fetchPerformance } =
    Fetch(`${url}/user/${userId}/performance`);

  // useEfect function
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUser();
      setUser(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPerformance();
      setPerformance(data.data);
      setPerformanceKind(data.kind);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchActivity();
      setActivity(data.data.sessions);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAverageSessions();
      setAverageSessions(data.data.sessions);
    }
    fetchData();
  }, []);

  return {
    activity,
    averageSessions,
    performance,
    user,
    performanceKind,
    loadingUser,
    loadingActivity,
    loadingAverageSessions,
    loadingPerformance,
  };
};
export default FetchData;