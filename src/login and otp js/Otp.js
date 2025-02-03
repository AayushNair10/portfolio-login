import React, { useState, useEffect, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import '../login and otp css/Otp.css';
import PhoneContext from "../others/PhoneContext";
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';

const Otp = () => {
  const [countdown, setCountdown] = useState(30);
  const [showResend, setShowResend] = useState(false);
  const [inputsFilled, setInputsFilled] = useState(false);
  const [inputValues, setInputValues] = useState(["", "", "", ""])
  const [NextPage, SetNextPage] = useState(false);
  const navigate = useNavigate();
  const phoneContextValue = useContext(PhoneContext); 
  const phone = phoneContextValue.phone;
  let otp = inputValues.join("");
     
  useEffect(() => {
    const countt = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setShowResend(true);
        clearInterval(countt);
      }
    }, 1000);
    return () => {
      clearInterval(countt);
    };
  }, [countdown]);

  const resend = async () => {
    try {
      const response = await fetch("https://adidev01.ipadlive.com/TEST/api.php", {
        method: "POST",
        body: JSON.stringify({
          action: "sendotp",
          phno: phone,
        }),
      });
      const data = await response.json();
      if (data.result.status === "SUCCESS") {
        UIkit.notification({message: `OTP sent: ${data.result.otp}`});
        phoneContextValue.setGetOtp(data.result.otp)
        setCountdown(30);
        setShowResend(false);
      } else {
        console.log("Failed to send OTP:", data.result.message);
        UIkit.notification({message: 'Failed to send OTP'});
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }        
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    const inputs = document.querySelectorAll(".input-field input");
    const currentInput = inputs[index];

    if (value.length > 1) {
      currentInput.value = "";
      return;
    }
    const nextInput = currentInput.nextElementSibling;
    const prevInput = currentInput.previousElementSibling;
    if (nextInput && nextInput.hasAttribute("disabled") && value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (value === "") {
      inputs.forEach((input, index2) => {
        if (index <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }
    const isAllInputsFilled = [...inputs].every((input) => input.value);
    setInputsFilled(isAllInputsFilled);
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://adidev01.ipadlive.com/TEST/api.php", {
        method: "POST",
        body: JSON.stringify({
          action: "verifyotp",
          phno: phone,
          otp: otp,
        }),
      });
      const data = await response.json();
      const getOtp=phoneContextValue.GetOtp
      if (data.result.status === "SUCCESS" && getOtp===otp) {
        console.log("OTP verified successfully!");
        SetNextPage(true);
      } else {
        console.log("OTP verification failed:", data.result.message);
        UIkit.notification({message: 'The entered OTP is wrong'});
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
  if(NextPage){
    navigate('/home_page');
  }
  return (
    <>
      <div className="opt-body">
        <Link to="/email" className="previous round">&#8249;</Link>
        <p className="heading-otp">Welcome {phone}<br />Enter OTP Code</p>
        <form action="#">
          <div className="input-field">
            <input type="number" onChange={(e) => handleInputChange(0, e.target.value)} />
            <input type="number" disabled onChange={(e) => handleInputChange(1, e.target.value)} />
            <input type="number" disabled onChange={(e) => handleInputChange(2, e.target.value)} />
            <input type="number" disabled onChange={(e) => handleInputChange(3, e.target.value)} />
          </div>
        </form>
        <div className="otp-container">
          {countdown >= 1 ? (
            <div className="timer" id="timer">
              Resend OTP in <span id="seconds">{countdown}</span> seconds
            </div>
          ) : (
            showResend && (
              <Link to="/otp">
                <button className="resend-button" id="resendButton" onClick={resend}>Resend OTP</button>
              </Link>
            )
          )}
        </div>
        <div className="submitt">
          <Link className={inputsFilled ? "" : "disabled-link"}>
            <button
              className={`submit-button ${!inputsFilled ? 'disabled' : ''}`}
              disabled={!inputsFilled}
              onClick={handleSubmit}>
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Otp;