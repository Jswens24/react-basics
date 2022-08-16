import React from 'react';

const Child = (props) => {
    const handleChange = (event) => {
        props.setUserInput(event.target.value)
    }

    return (
        <div>
            <h2>Child Component</h2>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Child;