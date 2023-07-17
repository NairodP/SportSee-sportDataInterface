/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url, params) {
  const [errors, setErrors] = useState(null);

  const axiosRequest = async () => {
    setErrors(null);

    try {
      const response = await axios.get(url, params);
      return response.data;
    } catch (error) {
      setErrors("Une erreur s'est produite : " + error.message);
    }
  };

  return {
    errors,
    axiosRequest,
  };
}


export default function CallAPI({ url, userId }) {
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
    activity,
    averageSessions,
    performance,
  };
}