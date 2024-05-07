import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./PaginationComponent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MOVIES } from "../Redux/Types/MoviesTypes";
import { getByUrl } from "../Redux/Actions/MoviesAction";
import Navbar from "./Navbar";
const MovieList = ({ movieList,setX }) => {
  setX(1)
  const [movies, setMovies] = useState([]);
  const dataMovies = useSelector((state) => state.movies); //acces data(movies) in store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByUrl(MOVIES)); //we put data in store
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //  if any action happened in store like (search or reload or get another page) we call movielist because it is depen on change in data
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <div>
      <Row className="mt-3" ref={movieList}>
        {movies.length >= 1 ? (
          movies.map((mov) => {
            return <CardMovie key={mov.id} mov={mov} />;
          })
        ) : (
          <h2 className="text-center p-5">لا يوجد افلام ....</h2>
        )}
      </Row>
      <div>{movies.length >= 1 ? <PaginationComponent /> : null}</div>
    </div>
  );
};

export default MovieList;
