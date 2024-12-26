import { useState } from "react"

const Counter = ({ title, message, hoverMessage }) => {
    const [count, setCount] = useState(0)
    const [isMouseOver, setIsMouseOver] = useState(false)
    
    return (
        <div className="card">
        <h4>{title}</h4>
        <p>{isMouseOver ? hoverMessage : ""}</p>
        <button onClick={() => setCount((count) => count + 1)}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}>
          count is {count}
        </button>
        <p>
          {count > 10 ? message : ""}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    )
}

export default Counter