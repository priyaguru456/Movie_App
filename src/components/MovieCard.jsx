const MovieCard = ({ movie }) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <img src={imgURL + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
