function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div style={{ padding: "40px" }}>
      <h2>Fruit List</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
