import { useEffect, useState } from "react";
import AppActionButton from "./AppActionButton";
import AppCalculationHistory from "./AppCalculationHistory";

function AppCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [compare, setCompare] = useState("");
  const [history, setHistory] = useState([]);

  //Dynamiczne porównanie
  useEffect(() => {
    if (a === "" || b === "") {
      setCompare("");
      return;
    }

    const numA = Number(a);
    const numB = Number(b);

    if (numA > numB) setCompare("Liczba A jest większa od liczby B");
    else if (numA < numB) setCompare("Liczba A jest mniejsza od liczby B");
    else setCompare("Liczba A jest równa liczbie B");
  }, [a, b]);

  //Wykonywanie operacji
  const calculate = (operation) => {
    if (a === "" || b === "") return;

    const numA = Number(a);
    const numB = Number(b);
    let res;

    if (operation === "/" && numB === 0) {
      alert("Nie można dzielić przez 0!");
      return;
    }

    switch (operation) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "*":
        res = numA * numB;
        break;
      case "/":
        res = numA / numB;
        break;
      default:
        return;
    }

    setResult(res);
    setHistory([
      ...history,
      { a: numA, b: numB, operation, result: res, compare },
    ]);
  };

  //Przywracanie z historii
  const restoreFromHistory = (index) => {
    const item = history[index];
    setA(item.a);
    setB(item.b);
    setResult(item.result);
    setCompare(item.compare);

    setHistory(history.slice(0, index));
  };

  const disabled = a === "" || b === "";

  return (
    <div>
      <h3>Kalkulator</h3>

      <label>
        A:
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </label>

      <label>
        B:
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </label>

      <div>
        <AppActionButton label="+" onClick={() => calculate("+")} disabled={disabled} />
        <AppActionButton label="-" onClick={() => calculate("-")} disabled={disabled} />
        <AppActionButton label="*" onClick={() => calculate("*")} disabled={disabled} />
        <AppActionButton label="/" onClick={() => calculate("/")} disabled={disabled} />
      </div>

      <div>
        <label>Wynik:</label>
        <input value={result} readOnly />
      </div>

      <div>
        <label>Porównanie:</label>
        <input id="comp" value={compare} readOnly />
      </div>

      <AppCalculationHistory history={history} onRestore={restoreFromHistory} />
    </div>
  );
}

export default AppCalculator;
