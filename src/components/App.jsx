import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function to handle change from the input elements
  function updateName(event) {
    const { value, name } = event.target;

    // use a conditional statement to update full Name, both fname and lname separately.

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
      console.log(preValue);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={updateName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={updateName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
