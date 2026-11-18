//App.js file
import React from 'react';


export default function App() {
    const [isRed, setIsRed] = React.useState(false);

    function toggleStyle() {
        setIsRed(prevState => !prevState);
    }

    return (
        <div>
            <p style={{ color: isRed ? 'red' : 'white' }}>
                Style me!
            </p>
            <button onClick={toggleStyle}>Toggle style</button>
        </div>
    );
}
