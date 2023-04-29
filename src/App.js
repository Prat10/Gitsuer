import './App.css';
import Form from './Form';
import { useState } from "react";
import Users from './Users';

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || "[]";
  } catch (e) {
    throw new Error(e);
  }
}

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) { //Async function for search submit
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
    console.log(results);
  }
  return (
    <div className="App">
      <h1>Search Github Users</h1>
      <main className='main'>
        <Form
          onChange={onSearchChange} //send as props
          onSubmit={onSearchSubmit}  //send as a props
          value={query}  // query
        />
        <h3>Results:</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <Users
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
