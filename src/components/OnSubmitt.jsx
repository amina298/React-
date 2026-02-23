function FormExample() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page refresh
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your email" />
          <br></br>
      <button type="submit">Submit</button> <br></br>
    </form> 
  );
}

export default FormExample;
