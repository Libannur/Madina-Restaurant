import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        backgroundImage: "url('/madina-logo.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '402px 536px',
        backgroundColor: 'black',
        height: '50vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
        color: 'black',
      }}
    >
      <Button style={{ marginTop: '290px' }} type="button" variant="dark" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
