import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  //데이터 가져오기
  const [movie, getMovie] = useState([]);
  const movieData = async () => {
    const movie = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movie)
  };
  useEffect(() => {
    movieData()
  }, []);
  return <div>List</div>;
};

export default List;
