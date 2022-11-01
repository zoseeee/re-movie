import React from "react";
import List from "./List";
import "./common.scss";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Glist from "./Glist";
import All from "./All";

const App = () => {
  const genreList = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Fantasy",
    "Horror",
    "Music",
    "Romance",
    "Superhero",
  ];
  return (
    <div>
      <Header>
        <ul className="flex">
          {genreList.map((it) => {
            return (
              <li>
                <Link to={it}>{it}</Link>
              </li>
            );
          })}
        </ul>
      </Header>
      <Routes>
        <Route path="/" element={<Main limit={50} />} />
        {genreList.map((it) => {
          return <Route path={it} element={<Glist genre={it} limit={20} />} />;
        })}
      </Routes>
      <All />
      <List genre="Crime" limit={20} />
      <List genre="Fantasy" limit={20} />
      <List genre="Horror" limit={5} />
    </div>
  );
};

export default App;
