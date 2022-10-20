import logo from './logo.png';
import './App.css';
import ChuckNorris from './components/ChuckNorris';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChuckNorris/>
      </header>
    </div>
  );
}

export default App;
