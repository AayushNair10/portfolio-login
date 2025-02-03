import React, { useState,useContext}  from "react";
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import { Link, useNavigate } from "react-router-dom";
import '../login and otp css/Email.css'
import PhoneContext from '../others/PhoneContext';

function Email(){
  const phoneContextValue = useContext(PhoneContext); 
  const [PhoneNum,SetPhoneNum]=useState('');
  const [buttonEnable,SetButtonEnable]=useState(false);
  const [IsEnabled,setIsEnabled]=useState(false);
  const[CanNavigate,SetCanNavigate]=useState(false);
  const navigate = useNavigate();
  const enablee=(event)=>{
    const phone=event.target.value.trim();
    SetPhoneNum(phone); 
    setIsEnabled(phone.length === 10 );
    SetButtonEnable(/^[0-9]+$/.test(phone));
  };
  const buttonClick = async () => {
    if (buttonEnable) {
      try {
        const response = await fetch("https://adidev01.ipadlive.com/TEST/api.php", {
          method: "POST",
          body: JSON.stringify({
            action: "sendotp",
            phno: PhoneNum,
          }),
        });
        const data = await response.json();
        if (data.result.status === "SUCCESS") {
          UIkit.notification({message: `OTP sent: ${data.result.otp}`});
          phoneContextValue.setGetOtp(data.result.otp)
          SetCanNavigate(true);
          phoneContextValue.setPhone(PhoneNum);
        }
        else {
          console.log("Failed to send OTP:", data.result.message);
          UIkit.notification({message: 'Failed to send OTP'});
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    }
    else {
      window.location.reload();
      alert("Wrong number entered");
    }
  };
  if(CanNavigate){
    navigate("/otp");
  }
  return(
    <>
      <div className="back">
        <Link to="/" className="previous round">&#8249;</Link>
      </div>
      <div className="heading">Login</div>
      <div className="desc">Hello, Welcome back to our account</div>
      <div className="container">
        <div className="phone">Phone number</div>
        <div className="dropdown">
          <select className="phone-dropdown">
            <option value="+91" className="drop">+91</option>
            <option value="+1" className="drop">+1</option>
            <option value="+44" className="drop">+44</option>
            <option value="+52" className="drop">+52</option>
            <option value="+86" className="drop">+86</option>
          </select>
          <input className="phone-dropdown" type="text" placeholder="Enter Phone Number" value={PhoneNum} onChange={enablee} />
        </div>
      </div>
      <Link className="submit">
        <button className="submit-button" disabled={!IsEnabled} onClick={()=>buttonClick(PhoneNum)}>Request OTP</button>
      </Link>
      
    </>
  );
}
export default Email;