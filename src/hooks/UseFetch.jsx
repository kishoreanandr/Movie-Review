import { useEffect, useState } from "react";

const UseFetch = (apiPath,queryTerm = "") => {

  const [data, setData] = useState([]);
  const key = process.env.REACT_APP_API_KEY;
  

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;  

  useEffect(()=>{
    async function fetchMovies() {
      fetch(url)
      .then((res)=>res.json())
      .then((jsonData)=>setData(jsonData.results));
    }
    fetchMovies();
  },[url])
  console.log(data);

  return { data };
};
export default UseFetch