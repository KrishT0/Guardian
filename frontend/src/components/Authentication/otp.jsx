import React, { useState, useRef } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numeric input
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Update the OTP state
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input box
    if (value !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    // Prevent pasting non-numeric characters
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData('text/plain')
      .replace(/\D/g, '')
      .slice(0, 6);

    // Update the OTP state
    let newOtp = Array(6).fill('');
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
      }}
    >
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{
            width: '2rem',
            height: '2rem',
            marginRight: '0.5rem',
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
