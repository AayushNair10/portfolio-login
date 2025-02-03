import React from 'react';
import { Link } from "react-router-dom";
import '../login and otp css/Login.css';

function Login() {
  return (
    <>
      <div className="full">
        <div className='full2'>
          <div className="heading">Portfolio Optimizer</div>
          <div className="desc">
            Welcome to Portfolio Optimizer!<br/><br/><br/><br/> Our project leverages quantum computing platforms like D-Wave's quantum annealing and Qiskit's gate-based approach to revolutionize portfolio optimization. We solve complex investment allocation problems to maximize returns while minimizing risks. Benchmarking against classical and ML algorithms, we demonstrate quantum advantage, offering financial institutions a cutting-edge tool for smarter, faster portfolio management.
          </div>
          <Link to='/email'>
            <button className="mobile">Continue with Mobile Number</button>
          </Link>
          <span className="desc" id="or">OR</span>
          <Link to='/signup'>
            <button className="mobile">Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;