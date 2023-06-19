import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [search, setSearch] = useState("");
  async function fetchData(url) {
    const res = await axios.get(url);
    console.log(res.data.Search);
    setAllMovies(res.data.Search);
  }

  const handleSearch = () => {
    if (search != "") {
      fetchData(`https://omdbapi.com/?s=${search}&apikey=a8297e74`);
    } else {
      alert("Please write the name of movie");
    }
  };

  useEffect(() => {
    fetchData(`https://omdbapi.com/?s=titanic&apikey=a8297e74`);
  }, []);

  return (
    <div style={{}}>
      <h1 className="text-primary">Movies</h1>
      <input
        className="form-control ps-3"
        style={{ width: "30rem", margin: "auto" }}
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary ps-5 pe-5 m-2" onClick={handleSearch}>
        Search
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: "fit-content",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {allMovies.map((movie) => (
          <div
            style={{
              display: "block",
              width: "350px",
              border: "4px solid",
              margin: "10px",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "#e2e2ea",
            }}
            key={movie.imdbID}
          >
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
