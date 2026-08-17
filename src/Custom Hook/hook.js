import { useEffect, useState } from "react";
import axios from "axios";

function useApi(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading]= useState(true)

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const success = await axios.get(url);
        setData(success.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };
    fetchApi();
  }, []);

  return { data,loading };
}

export default useApi;
