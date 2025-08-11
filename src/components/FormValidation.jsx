import React, { useState } from "react";
import "../css/form.css";
const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    location: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === "",
      password: password.trim() === "",
      email: email.trim() === "",
      location: location.trim() === "",
    };
    setError(newErrors);
    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.location
    ) {
      setSuccessMessage(
        `Submitted Succeesfully!\n Name:${name} \n Email:${email}\n location:${location}`
      );
       setEmail("");
    setLocation("");
    setPassword("");
    setName("");
    } else {
      setSuccessMessage("");
    }
   
  };

  return (
    <div className="container">
      <h1 className="title">Form validation </h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label className="label" htmlFor="name">
            Username <span className="asterisk">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          {error.name ? <p className="error">Name is Required</p> : ""}
        </div>
        <div className="input-group">
          <label className="label" htmlFor="email">
            Email <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          {error.email ? <p className="error">Email is Required</p> : ""}
        </div>
        <div className="input-group">
          <label className="label" htmlFor="password">
            Password <span className="asterisk">*</span>
          </label>
          <input
            type="password"
            className="input"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password ? <p className="error">Password is Required</p> : ""}
        </div>
        <div className="input-group">
          <label className="label" htmlFor="location">
            Location <span className="asterisk">*</span>
          </label>
          <input
            className="input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="enter your location"
          />
          {error.location ? <p className="error">Location is Required</p> : ""}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
{successMessage && console.log(successMessage)}
      {successMessage &&  (
        <pre className="success-message">{successMessage}</pre>
      )}
    </div>
  );
};

export default FormValidation;
