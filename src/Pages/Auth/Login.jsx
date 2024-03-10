import  { useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import LoginImg from "../../Assets/Login.png";
// import PhoneInput from 'react-phone-number-input/input'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Login.css";

function Login() {
  const numberOfDigits = 4;
  const [Verify, setVerify] = useState(false);
  const handlelogin = () => {
    setVerify(!Verify);
  };
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  console.log(otp);
  // const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);
  const [value, setValue] = useState();

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }
  return (
    <div className="pb-20">
      <div className="w-100 login">
        <h1 className="login-text p-3">Login/Sign Up</h1>
        <img className="login-image mb-3 mx-auto" src={LoginImg} />
      </div>

      {!Verify ? (
        <div className="d-flex mb-3 w-full lg:w-2/4 mx-auto p-2 flex-column gap-3 justify-content-around">
          <div>
            <Form.Label className="d-flex input-label">
              Enter Full Name
            </Form.Label>
            <input className="form-control" type="email" />
          </div>
          <div>
            <Form.Label className="d-flex input-label">
              Enter Email address
            </Form.Label>
            <input className="form-control" type="email" />
          </div>
          <div>
            <Form.Label className="d-flex input-label">
              Enter Phone Number
            </Form.Label>
            <PhoneInput country={"us"} value={value} onChange={setValue} />
          </div>
          <div>
            <button className="w-full submit" onClick={handlelogin}>
              Verify
            </button>
          </div>
        </div>
      ) : (
        <Container className="d-flex mb-3 mt-5 w-25 flex-column gap-3 ">
          <div>
            <Form.Label className="input-label mb-4 h4">Enter OTP</Form.Label>
            <div className="d-flex justify-content-center items-center gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                  ref={(reference) =>
                    (otpBoxReference.current[index] = reference)
                  }
                  style={{ width: "2.5em", height: "2.5em" }}
                  className={`otp-input  rounded text-black p-3 rounded-md block focus:border-2 focus:outline-none appearance-none`}
                />
              ))}
            </div>
          </div>
          <div>
            <button className="w-full mt-4 submit" onClick={handlelogin}>
              Verify
            </button>
            <button className="w-full mt-4 text-lg text-gray-500 font-bold" onClick={handlelogin}>
              Resend
            </button>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Login;
