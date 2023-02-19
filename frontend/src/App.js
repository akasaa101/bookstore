import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  const handleOnClick = () => {
    console.log("handled")
    var config = {
    method: 'get',
    url: 'http://127.0.0.1:4000',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button  onClick={handleOnClick}>
          hello
        </button>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
