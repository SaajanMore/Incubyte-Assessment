import logo from "./logo.svg";
import "./App.css";
import AddNumbers from "./AddNumbers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assessment</h1>

        <AddNumbers num={"1,2,3"} />
      </header>
    </div>
  );
}

export default App;
