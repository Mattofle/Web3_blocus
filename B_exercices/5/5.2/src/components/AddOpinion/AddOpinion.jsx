import { useContext } from "react";
import { Context as voteContexte } from "contexts/voteContexte";

const AddOpinion = () => {
    const {
        createVote
    } = useContext(voteContexte);

    const handleSubmit = (event) => {
        event.preventDefault();
        const opinion = event.target.opinion.value;
        createVote(opinion);
        event.target.opinion.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="opinion" type="text" placeholder="opinion" />
            <button type="submit">add</button>
        </form>
    )
}

export default AddOpinion;