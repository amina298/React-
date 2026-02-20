import React, { useState } from "react"; // ✅ import useState at the top
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Greeting from './components/Greeting';
import Button from './components/Button';
import UserCard from './components/userCard';

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

  // Render
  return (
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
      <UserCard user={{ name: "Amina", age: 25, profession: "Web Developer" }} />
    </div>
  );
}

export default App;
