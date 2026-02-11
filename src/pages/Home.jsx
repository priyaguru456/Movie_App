import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch popular movies on page load
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        const response = await tmdb.get("/movie/popular");
        setMovies(response.data.results);
      } catch (err) {
        setError("Failed to load movies");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App</h1>

      {/* Search Bar */}
      <SearchBar setMovies={setMovies} />

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Loading / Movie List */}
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
