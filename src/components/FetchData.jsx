/* eslint-disable react-hooks/exhaustive-deps */
// Hook Api
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const FetchData = (url, userId) => {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState({});

  const fetchUser = useFetch(`${url}/user/${userId}/`).axiosRequest;

  const fetchActivity = useFetch(`${url}/user/${userId}/activity`).axiosRequest;

  const fetchAverageSessions = useFetch(
    `${url}/user/${userId}/average-sessions`
  ).axiosRequest;

  const fetchPerformance = useFetch(
    `${url}/user/${userId}/performance`
  ).axiosRequest;

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
    user,
    performance,
    activity,
    averageSessions,
  };
};
export default FetchData;
