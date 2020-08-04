import React, { useEffect, useState } from "react";
import auth from "./firebase/index";
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleReset = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Password reset email sent");
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        ea? Magnam.
      </h2>
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={handleEmail}
      />
      <button onClick={handleReset}>sumit</button>
    </div>
  );
}

export default ForgetPassword;
