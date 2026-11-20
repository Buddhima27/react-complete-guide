// App.js
import React from 'react';
import Toast from './Toast';

function App() {
  const [showToast, setShowToast] = React.useState(false);

  function handleEnrol() {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <div id="app">
      {showToast && <Toast message="Successfully enrolled!" />}

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;


//Toast.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function Toast({ message }) {
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector('body')
  );
}
