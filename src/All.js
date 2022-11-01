import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const All = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [snum, setSnum] = useState(1);
  const allMovie = async () => {
    const res = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=50`
    );
    console.log(res.data, res.data.data.movie_count);
    setMovie(res.data.data.movies);
    setTotal(res.data.data.movie_count);
  };
  useEffect(() => {
    allMovie();
  }, [page]);

  const listNum = Array.from({ length: total / 50 });
  const cNum = 10;
  return (
    <>
    <button onClick={() => setSnum(snum - cNum)}>PREV</button>
      <ul>
        {
          //
          listNum.slice(snum, snum + cNum).map((it, idx) => (
            <button
              onClick={() => {
                setPage(idx + snum);
              }}
            >
              {idx + snum}
            </button>
          ))
        }
      </ul>
      <button onClick={() => setSnum(snum + cNum)}>NEXT</button>
      <div>
        {
          //
          movie.map((it) => (
            <li>{it.title}</li>
          ))
        }
      </div>
    </>
  );
};

export default All;
