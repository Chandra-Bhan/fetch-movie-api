import React from "react";
import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/${movie.imdbID}`)}>
      <img src={movie.Poster} width={250} height={300} />
      <h2>
        {movie.Title} ({movie.Year}) {movie.Type}
      </h2>
    </div>
  );
}

export default Movie;
