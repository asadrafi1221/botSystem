import React from 'react';
import Login from './controllers/login';
import Logout from './controllers/logout';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "1030908024396-h03lv154t229qqpnj733j1n353sj1m16.apps.googleusercontent.com";

console.log(clientId)
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
    <Logout/>
    <Login/>
        <p>Hello</p>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
