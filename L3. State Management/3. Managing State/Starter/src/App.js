import corgi from "./corgi.jpg";
import { useState } from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {count}</p>
            <button onClick={() => setCount(count + 1)}>
        Like
      </button>
    </div>
  );
};

export default App;
