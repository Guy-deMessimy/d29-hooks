import React, { useState } from 'react';

function Counter () {

    const [ count, setCount] = useState(0);
 

const onChangeHandler = (e) => {
    setCount(e.target.value)
}

return (
    <div>
        <p> Le compteur est à : {count}</p>
        <input 
        type="text" 
        id="num" 
        name="num"
        onChange={onChangeHandler}></input>
        <button onClick={() => setCount(parseInt(count) +1)} > +1</button>
        <button onClick={() => setCount(parseInt(count) -1)} >-1</button>
    </div>
)  
}

export default Counter;
