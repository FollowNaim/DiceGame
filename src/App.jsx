import { useState } from "react";
import GamePlay from "./components/GamePlay";
import Home from "./components/Home";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);
  const ToggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <div>{isGameStarted ? <GamePlay /> : <Home toggle={ToggleGamePlay} />}</div>
  );
}

export default App;
