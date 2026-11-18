//App.js file
import React from 'react';

function App() {
  const [color, setColor] = React.useState('white');

  return (
    <div id="app">
      <h1 style={{ color: color }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setColor('green')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setColor('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
