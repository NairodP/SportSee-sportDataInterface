import axios from "axios";
import { useState } from "react";

export default function Fetch(url, params) {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const axiosRequest = async () => {
    setErrors(null);
    setIsLoading(true);

    try {
      const response = await axios.get(url, params);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setErrors("Une erreur s'est produite : " + error.message);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errors,
    axiosRequest,
  };
}
