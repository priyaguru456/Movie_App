import { useState } from "react";
import tmdb from "../api/tmdb";

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    const res = await tmdb.get("/search/movie", {
      params: { query },
    });

    setMovies(res.data.results);
  };

  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
