// ***************************this is a functional component***************************

import React, { useState } from 'react';
import Child from './child';

const Parent = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <div>
            <h2>Parent Component</h2>
            <Child userInput={userInput} setUserInput={setUserInput} />
            <p>{userInput}</p>
        </div>
    )
}

export default Parent;









// ***************************this is a class component***************************

// import React, { Component } from 'react';

// class Parent extends Component {
//     constructor() {
//         super()

//         this.state = {
//             userInput: ''
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Parent Component</h2>
//                 <p>{this.state.userInput}</p>
//                 <input type="text" onChange={(event) => this.setState({ userInput: event.target.value })} />
//             </div>
//         )
//     }
// }

// export default Parent;