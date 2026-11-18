
import React from 'react';

function App() {
  const [highlight, setHighlight] = React.useState('');

  return (
    <div id="app">
      <h1 className={highlight}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setHighlight('highlight-green')}>
            Yes
          </button>
        </li>
        <li>
          <button onClick={() => setHighlight('highlight-red')}>
            No
          </button>
        </li>
      </menu>
    </div>
  );
}

export default App;

