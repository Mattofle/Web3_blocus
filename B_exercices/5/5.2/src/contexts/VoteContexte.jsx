import React, { useState, useEffect } from "react";
import votesService from "services/votesService";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
    const [votes, setVotes] = useState([]);

    const hook = () => {
        console.log("effects")
        votesService.getAll()
            .then((votes) => {
            setVotes(votes);
            })
            .catch((error) => {
                console.error(error);
            }); 
    }
    useEffect(hook, []);

    const createVote = (vote) => {
        const newVote = {
            id: uuidv4(),
            opinion : vote,
            score : 0
        }
        votesService.create(newVote)
            .then((vote) => {
                setVotes(votes.concat(vote));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const updateVote = (id) => {
        if (!votes.find(vote => vote.id === id)) {
            console.error("vote not found");
            return;
        }
        const updatedVote = votes.find(vote => vote.id === id)
        updatedVote.score += 1;
        console.log(updatedVote);
        votesService.update( updatedVote.id ,updatedVote)
            .then(() => {
                setVotes(votes.map(vote => vote.id !== updatedVote.id ? vote : updatedVote));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const exposedValue = {
        votes,
        createVote,
        updateVote
    }

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    );
}

export {
    Context,
    ProviderWrapper
}