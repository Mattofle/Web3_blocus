import AddMovieForm from 'components/AddMovieForm/AddMovieForm';
import { useOutletContext } from 'react-router-dom';

const AddMoviePage = () => {
    const {
        onMovieAdded,
    } = useOutletContext();
    return (
        <div>
            <h1>Add Movie</h1>
            <AddMovieForm onMovieAdded={onMovieAdded} />
        </div>
    );
}

export default AddMoviePage;