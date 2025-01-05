import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  console.log("card : ",movie.id);
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </h3>
        {movie.imageUrl && (
          <img
            src={movie.imageUrl}
            className="card-img-top"
            alt={movie.title}
          />
        )}
        <p className="card-text">
          <strong>Réalisateur :</strong> {movie.director}
        </p>
        <p className="card-text">
          <strong>Durée :</strong> {movie.duration} minutes
        </p>
        {movie.budget && (
          <p className="card-text">
            <strong>Budget :</strong> {movie.budget} millions de dollars
          </p>
        )}
        {movie.description && (
          <p className="card-text">
            <strong>Description :</strong> {movie.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
