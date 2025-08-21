import { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>App</h2>
      <Component1 count={count} setCount={setCount} />
    </div>
  );
}

export default App;
