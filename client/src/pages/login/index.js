import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/commonClasses.css';
import './login.css';
const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [msg, setMsg] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /*const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ user, pwd, role }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );*/
      const response = await fetch('http://localhost:3500/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_ID: email, password: pwd, role }),
      });
      if (response.status === 400) {
        setMsg('Missing Details');
      } else if (response.status === 401) {
        setMsg('Unauthorised');
      } else if (response.status === 402) {
        setMsg('Email ID not in Database');
      } else if (response.status === 200) {
        const data = await response.json();
        //console.log(data[0].customer_id);
        setUser(data[0]);
        setEmail('');
        setPwd('');
        history.push('/');
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
        <h1>Welcome Back!</h1>
        <label htmlFor="username">Email ID:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          required
        >
          <option value=""> --Choose Role-- </option>
          <option value="admin"> Admin </option>
          <option value="customer"> Customer </option>
          <option value="label"> Label </option>
        </select>
        <button>Sign In!</button>
        <br></br>
        <a href="./signup">New Customer? Sign Up!</a>
      </form>
    </div>
  );
};

export default Login;
