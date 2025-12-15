function AppHeader({ onFontChange }) {
  return (
    <header>
      <h2>Paweł Gmyz</h2>

      <div>
        <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => onFontChange("small")}>
          A
        </span>{" "}
        <span style={{ fontSize: "18px", cursor: "pointer" }} onClick={() => onFontChange("medium")}>
          A
        </span>{" "}
        <span style={{ fontSize: "26px", cursor: "pointer" }} onClick={() => onFontChange("large")}>
          A
        </span>
      </div>
    </header>
  );
}

export default AppHeader;
