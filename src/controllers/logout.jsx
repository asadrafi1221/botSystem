import React from "react";
import { googleLogout } from '@react-oauth/google';

const clientId = "1030908024396-h03lv154t229qqpnj733j1n353sj1m16.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (response) => {
    console.log("Login Success:", response);
  };

  const onFailure = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <div>
      <googleLogout
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
      
      />
    </div>
  );
};

export default Logout;
