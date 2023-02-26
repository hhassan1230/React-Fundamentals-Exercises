// We need to import useState from react to use state in our component
import { useState } from "react"; 
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // We use useState to create a state variable called value and a function to update it called setValue
  const [value, setValue] = useState(""); 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Used Controlled Components to update the value of the input field and just display the value of the input field
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={value}
          onChange={handleChange}
        />
        <p className="echo">Echo:</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;
