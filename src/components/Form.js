import React from "react";
import DisplayData from "./DisplayData";

function Form({firstName, lastName, handleFirstName, handleLastName}) {
  
  return (
    <div>
    <form>
      <input type="text" onChange={handleFirstName} value={firstName} />
      <input type="text" onChange={handleLastName}value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
  );
}

export default Form;
