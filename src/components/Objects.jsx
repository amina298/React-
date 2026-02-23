function App() {
  const users = [
    { id: 1, name: "Amina", age: 22 },
    { id: 2, name: "John", age: 25 },
    { id: 3, name: "Fatima", age: 20 },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px" }}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
