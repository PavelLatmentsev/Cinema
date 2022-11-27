import { useEffect, useState } from "react";
const SLUG = "marvel";
const API_KEY = "9b67fc54";
const BASE_URL = `https://www.omdbapi.com/?s=${SLUG}&apikey=${API_KEY}`;

function formatResponse(dataFromServer) {
    return dataFromServer.Search;
  }
   
export function useGetFilms() {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        const formatData = formatResponse(result);
        setFilms(formatData);
      })
      .finally(() => setLoading(false));
  }, []);
 
  return {
    films,
    isLoading
  }
}

