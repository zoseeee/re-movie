import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useRef } from "react";
import Load from "./Load";

const Main = ({ limit }) => {
  //데이터 가져오기
  const [movie, getMovie] = useState([]);
  const [load, setLoad] = useState(true);
  const MS = useRef(null);
  const movieData = async () => {
    const movie = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?limit=${limit}`
    );
    getMovie(movie.data.data.movies);
    setLoad(false);
  };
  useEffect(() => {
    movieData();
  }, []);
  return (
    <section className="Main">
      {load ? (
        <Load />
      ) : (
        <Slider
          className="Main"
          slidesToShow={4}
          arrows={false}
          ref={MS}
          centerMode={true}
          centerPadding={100}
          autoplay={true}
        >
          {movie.map((it) => {
            return (
              <div key={it.id} className="item">
                <figure>
                  <img src={it.large_cover_image} alt={it.title} />
                </figure>
                <div class="case">
                  <div className="title">{it.title_long}</div>
                  <div className="des">
                    {it.description_full.substr(0, 100)}...
                  </div>
                  <ul className="genre">
                    {it.genres.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn"> + </button>
              </div>
            );
          })}
        </Slider>
      )}
      <div className="arrows">
        <i className="xi-arrow-left" onClick={() => MS.current.slickPrev()}></i>
        <i
          className="xi-arrow-right"
          onClick={() => MS.current.slickNext()}
        ></i>
      </div>
    </section>
  );
};

export default Main;
