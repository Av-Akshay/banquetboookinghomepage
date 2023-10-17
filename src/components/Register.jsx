import React from "react";

const Register = (props) => {
  return (
    <div className="sign-up">
      <img src={props.img} alt="logIn" />
      <p>{props.reg}</p>
    </div>
  );
};

export default Register;
