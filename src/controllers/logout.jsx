import React from "react";
import { googleLogout } from '@react-oauth/google';

const clientId = "1030908024396-h03lv154t229qqpnj733j1n353sj1m16.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    console.log("Logout successful!");
    // Add any additional logout success actions here
  };

  const onFailure = () => {
    console.log("Logout failed.");
    // Handle any actions needed on failure
  };

  return (
    <div>
      <googleLogout
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default Logout;
