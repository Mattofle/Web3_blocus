
import { useMatch } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';


const MoviePage = () => {
    const {
        movies,
      } = useOutletContext();
    console.log("in cards",movies);

    const match = useMatch('/movie/:id');
    console.log("match",match);
    const movieId = match?.params.id;
    console.log("movieId",movieId);

    if (!movieId) {
        return <p>No movie found</p>;
    }

    const movie = movies.find((movie) => movie.id.toString() === movieId);


    return (
        <div>
         <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.director}</p>
            <p>{movie.duration}</p>
            <p>{movie.budget}</p>
            <img src={movie.imageUrl} alt={movie.title} />
        </div>
    );
    }


export default MoviePage;