import MovieTitleList from 'components/MovieTitleList/MovieTitleList';
import { useOutletContext } from 'react-router-dom';
const HomePage = () => {
  const {
    movies,
  } = useOutletContext();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
      <p>Here are some of my favorite movies:</p>
      <MovieTitleList movies={movies} />
    </div>
  );
};

export default HomePage;
