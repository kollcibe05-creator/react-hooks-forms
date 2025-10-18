import React from "react";

function DisplayData({firstName, lastName}) {
    return (
        <div>
            <h1>Hello {firstName}</h1>
            <h3>Welcome to the Pack {lastName}</h3>
        </div>
    )
}


export default DisplayData;