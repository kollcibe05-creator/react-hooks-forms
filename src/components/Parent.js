import React, {useState} from "react";
import Form from "./Form";

function Parent () {
const [firstName, setFirstName] = useState("Jon");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstName (e) {
   setFirstName(e.target.value)
  }
   function handleLastName (e) {
   setLastName(e.target.value)
  }

 return (
    <div>
        <Form firstName={firstName} lastName={lastName} handleFirstName={handleFirstName} handleLastName={handleLastName}/>
    </div>
 ) 

}





export default Parent;