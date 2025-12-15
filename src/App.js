import { useState } from "react";
import AppHeader from "./AppHeader";
import AppCalculator from "./AppCalculator";

function App() {
  const [fontSize, setFontSize] = useState("medium");

  return (
    <div className={`app ${fontSize}`}>
      <AppHeader onFontChange={setFontSize} />
      <AppCalculator />
    </div>
  );
}



export default App;
