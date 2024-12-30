import { useContext } from "react";
import { Context as voteContexte } from "contexts/voteContexte";

const VoteList = () => {
    const {
        votes,
        
        updateVote
    } = useContext(voteContexte);

    return(
        <div>
            <ul>
                {votes.map(vote => 
                    <li key={vote.id}>{vote.opinion} {vote.score}
                    <button onClick={() => updateVote(vote.id)}> vote </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default VoteList;