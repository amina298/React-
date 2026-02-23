function KeyExample() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("You pressed Enter!");
    }
  };

  return (
    <input type="text" placeholder="Press Enter" onKeyDown={handleKeyDown} />
  );
}

export default KeyExample;
