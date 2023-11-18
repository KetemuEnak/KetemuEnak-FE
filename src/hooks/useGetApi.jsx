import { useState, useEffect } from "react";
import axios from "axios";

const useGetApi = (url) => {
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/${url}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setApiResponse(response.data);
      } catch (error) {
        setError(error.message || "An error occurred");
        return { response: null, data: null, error };
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return { apiResponse, isLoading, error };
};

export default useGetApi;
