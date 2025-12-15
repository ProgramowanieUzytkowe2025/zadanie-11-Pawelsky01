function AppCalculationHistory({ history, onRestore }) {
  return (
    <div>
      <h3>Historia obliczeń</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.a} {item.operation} {item.b} = {item.result}
            <button onClick={() => onRestore(index)}>Przywróć</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppCalculationHistory;
