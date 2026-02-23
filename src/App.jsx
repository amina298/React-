import React, { useState } from "react"; // ✅ import useState at the top
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Greeting from './components/Greeting';
import Button from './components/Button';
import UserCard from './components/userCard';
import ToggleText from './components/ToggleText';
import DarkModeToggle from './components/DarkModeToggle.jsx';

function App() {
  // State to show/hide project cards
  const [showCards, setShowCards] = useState(false);

  // Your projects data
  const projects = [
    { name: "Portfolio Website", age: "-", profession: "Frontend Developer" },
    { name: "ToDo App", age: "-", profession: "React Developer" },
    { name: "Weather App", age: "-", profession: "API Project" },
  ];

  // Event handlers
  const sayHello = () => {
    alert("Hire me!");
  };

  const handleShowProjects = () => {
    alert("Showing my projects!");
    setShowCards(true);
  };

  const handleContact = () => {
    alert("Contact me at aminajama219@gmail.com");
  
  
  };
  const [count, setCount] = useState(0);
  
   const handleKeyDown = (e) => {
     if (e.key === "Enter") {
       alert("You pressed Enter!");
     }
   };
  
  const [hovered, setHovered] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault(); // stops page refresh
      alert("Form submitted!");
    };
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showMessage, setShowMessage] = useState(false);
  
  const [age, setAge] = useState(16);
    let message;

    if (age >= 18) {
      message = "You are an adult";
    } else {
      message = "You are under 18";
    }
  
  const [jsState, setJsState] = useState("confusing");

  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  const users = [
    { id: 1, name: "Amina", age: 22 },
    { id: 2, name: "John", age: 25 },
    { id: 3, name: "Fatima", age: 20 },
  ];


  // Render
  return (
    <>
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        {/* Main Portfolio Header */}
        <Header name="Amina Jama" title="Frontend Developer" />
        <Greeting name="Amina" country="Kenya" />

        {/* Buttons */}
        <Button handleClick={handleShowProjects} text="View Projects" />
        <Button handleClick={handleContact} text="Contact Me" />
        <Button handleClick={sayHello} text="Hire Me" />

        {/* Conditionally render project cards */}
        {showCards && (
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
            {projects.map((proj, index) => (
              <UserCard key={index} user={proj} />
            ))}
          </div>
        )}

        {/* Optional extra content */}
        <h1>Hello React</h1>
        <Header name="Extra Section" title="Portfolio Example" />
        <About />
        <Greeting name="Amina" age={22} country="Kenya" />
        <UserCard
          user={{ name: "Amina", age: 25, profession: "Web Developer" }}
        />
      </div>
      <div>
        <ToggleText />
      </div>

      <DarkModeToggle />

      <div style={{ padding: "40px" }}>
        <h2>Count: {count}</h2>

        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>

      <input type="text" placeholder="Press Enter" onKeyDown={handleKeyDown} />

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: hovered ? "purple" : "gray",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hover Me
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your email" />
        <br></br>
        <button type="submit">Submit</button> <br></br>
      </form>

      <div style={{ padding: "40px" }}>
        <h2>{isLoggedIn ? "Welcome back, Amina!" : "Please log in"}</h2>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      </div>

      <div style={{ padding: "40px" }}>
        <button onClick={() => setShowMessage(true)}>Show Message</button>

        {showMessage && <p>Hello Amina 👋</p>}
      </div>

      <div style={{ padding: "40px" }}>
        <h2>{message}</h2>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
      </div>

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>JavaScript Status: {jsState}</h2>

        {jsState === "confusing" ? (
          <h3>
            JS is confusing 😭 <br />
            Wake up and do it again and again 💪🏽🔥
          </h3>
        ) : (
          <h3>
            I am strong 😍 <br />I will not give up coding 🚀
          </h3>
        )}

        <button
          onClick={() =>
            setJsState(jsState === "confusing" ? "understood" : "confusing")
          }
          style={{ marginTop: "20px" }}
        >
          Toggle Mindset
        </button>
      </div>

      <div style={{ padding: "40px" }}>
        <h2>Fruit List</h2>

        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>

      <div style={{ padding: "40px" }}>
        <h2>User List</h2>

        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: "10px" }}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
