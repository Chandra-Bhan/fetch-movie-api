import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  console.log(id);

  async function fetchData(url) {
    const res = await axios.get(url);
    console.log(res.data);
    setMovieDetail(res.data);
  }
  useEffect(() => {
    fetchData(`https://omdbapi.com/?i=${id}&apikey=a8297e74`);
  }, []);
  return (
    <div
      className="border"
      style={{
        width: "70rem",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#e2e2ea",
      }}
    >
      <h1 className="text-primary">Detail of movie</h1>
      <img
        style={{ marginTop: "20px" }}
        src={movieDetail.Poster}
        width={250}
        height={300}
      />
      <h2>
        {movieDetail.Title} ({movieDetail.Year}) {movieDetail.Type}
      </h2>
      <h3>({movieDetail.Genre})</h3>
      <div
        style={{
          textAlign: "left",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <h3>Actors: &nbsp;&nbsp;&nbsp; {movieDetail.Actors}</h3>
        <h3>Duration: &nbsp;&nbsp;&nbsp; {movieDetail.Runtime}</h3>
        <h3>Released: &nbsp;&nbsp;&nbsp; {movieDetail.Released}</h3>
        <h3>Director: &nbsp;&nbsp;&nbsp; {movieDetail.Director}</h3>
        <h3>Language: &nbsp;&nbsp;&nbsp; {movieDetail.Language}</h3>
        <h3>Writer: &nbsp;&nbsp;&nbsp; {movieDetail.Writer}</h3>
        <h3>BoxOffice: &nbsp;&nbsp;&nbsp; {movieDetail.BoxOffice}</h3>
        <h3>Awards: &nbsp;&nbsp;&nbsp; {movieDetail.Awards}</h3>
        <h3>
          Plot: &nbsp;&nbsp;&nbsp; <span>{movieDetail.Plot}</span>
        </h3>
        <h3>Country: &nbsp;&nbsp;&nbsp; {movieDetail.Country}</h3>
        <h3>Rated: &nbsp;&nbsp;&nbsp; {movieDetail.Rated}</h3>
        <h3>ImdbRating: &nbsp;&nbsp;&nbsp; {movieDetail.imdbRating}/10 </h3>
        <h3>ImdbVotes: &nbsp;&nbsp;&nbsp; {movieDetail.imdbVotes}</h3>
      </div>
    </div>
  );
}

export default Detail;
