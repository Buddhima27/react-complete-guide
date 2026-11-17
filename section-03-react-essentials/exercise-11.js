import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isHighlighted, setIsHighlighted] = React.useState(false);

    function handleToggleStyle() {
        setIsHighlighted((prev) => !prev);
    }

    return (
        <div>
            <p className={isHighlighted ? 'active' : ''}>Style me!</p>
            <button onClick={handleToggleStyle}>Toggle style</button>
        </div>
    );
}