import axios from "axios";
import { useState } from "react";

export default function useFetch(url, params) {
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
