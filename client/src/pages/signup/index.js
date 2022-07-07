import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [msg, setMsg] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3500/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_ID: user,
          pwd,
          first_name: fname,
          last_name: lname,
          phone_num: phone,
          address_customer: address,
        }),
      });
      if (response.status === 400) {
        setMsg('Missing Details');
      } else if (response.status === 401) {
        setMsg('Unauthorised');
      } else if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setUser('');
        setPwd('');
        setFName('');
        setLName('');
        setPhone('');
        setAddress('');
      } else {
        setMsg('New Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className={msg ? 'msg' : 'offscreen'}>{msg}</p>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Periphery!</h1>
        <label htmlFor="username">Email ID:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          onChange={(e) => setFName(e.target.value)}
          value={fname}
          required
        />
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          onChange={(e) => setLName(e.target.value)}
          value={lname}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <button>Sign Up!</button>
        <br></br>
        <a href="./login">Already a Member? Sign In!</a>
      </form>
    </div>
  );
};

export default Signup;
