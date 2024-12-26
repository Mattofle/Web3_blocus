import { useState } from 'react';
import './Box.css';

const Box = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'violet'];
    const [color, setColor] = useState('red');
    const [count, setCount] = useState(0);
    const [nexColor, setNexColor] = useState('green');

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        const index = newCount % colors.length;
        setColor(colors[index]);
        setNexColor(colors[(index + 1) % colors.length]);
    }

    return (
        <div>
            <div className="box" style={{ backgroundColor: color }} ></div>
            <button onClick={handleClick}>next color : {nexColor}</button>
        </div>
    );
}

export default Box