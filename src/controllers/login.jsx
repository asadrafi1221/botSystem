import React from "react";
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const clientId = "1030908024396-h03lv154t229qqpnj733j1n353sj1m16.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (response) => {
    console.log("Login Success:", response);
  };

  const onFailure = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
    
      />
    </div>
  );
};

export default Login;
