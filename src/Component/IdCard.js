import React, { Component } from "react";

function IdCard ({ lastName, firstName, gender, height, birth, picture})
{ 
    return 
      <div className="IdCard">
        <img src={picture} alt="image"/>
    
          <strong>First name</strong>: {firstName} <br/>
          <strong>Last name</strong>: {lastName} <br/>
          <strong>gender</strong>: {gender} <br/>
          <strong>height</strong>: {height} <br/>
          <strong>birth</strong>: {birth}
      </div>
      };

  export default IdCard