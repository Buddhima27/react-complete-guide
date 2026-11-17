export const user = {
  name: '',
};

function App() {
  function handleCreateUser(userName) {
    user.name = userName;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="text" />
      </p>
      <p id="actions">
        {/* Pass an argument to handleCreateUser using an arrow function */}
        <button onClick={() => handleCreateUser('Maximilian')}>Create User</button>
      </p>
    </div>
  );
}

export default App;