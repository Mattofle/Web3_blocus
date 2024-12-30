import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [goodVotes, setGoodVotes] = useState(0)
    const [badVotes, setBadVotes] = useState(0)
    const [okVotes, setOkVotes] = useState(0)

    const increaseGood = () => {
        setGoodVotes(goodVotes + 1)
    }

    const increaseBad = () => {
        setBadVotes(badVotes + 1)
    }

    const increaseOk = () => {
        setOkVotes(okVotes + 1)
    }

    const resetAll = () => {
        setGoodVotes(0)
        setBadVotes(0)
        setOkVotes(0)
    }

    const exposedValue = {
        goodVotes,
        badVotes,
        okVotes,
        increaseGood,
        increaseBad,
        increaseOk,
        resetAll,
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {    
    Context,
    ProviderWrapper,    
}