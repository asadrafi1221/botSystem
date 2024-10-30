import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const onSuccess = (response) => {
    console.log("Login successful!", response);
    // Handle login success here, e.g., store tokens
  };

  const onError = () => {
    console.log("Login failed.");
  };

  return (
    <div>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default Login;
