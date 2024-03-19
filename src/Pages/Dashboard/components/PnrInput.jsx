import React, { useState } from "react";

const PnrInput = ({ onValidPnr }) => {
  const [pnr, setPnr] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPnr(value);
    setError("");
  };

  const handleSubmit = () => {
    const pnrRegex = /^[A-Za-z0-9]{6,10}$/;
    if (!pnrRegex.test(pnr)) {
      setError("Invalid PNR format");
      return;
    }
    // Invoke parent callback with valid PNR
    onValidPnr(pnr);
  };

  return (
    <div>
      <input
        type="text"
        value={pnr}
        onChange={handleChange}
        placeholder="Enter PNR"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <div className="toast">{error}</div>}
    </div>
  );
};

export default PnrInput;
