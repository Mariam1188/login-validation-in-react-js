
import React, { useState } from 'react';



const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateLogin = () => {
   
    const validUsername = "user";
    const validPassword = "pass";

    if (username === validUsername && password === validPassword) {
      console.log("Login successful!");
      setError('');
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.header}>Login</h2>
        <label htmlFor="username" style={styles.label}>Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} required />

        <label htmlFor="password" style={styles.label}>Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />

        <button type="button" onClick={validateLogin} style={styles.button}>Login</button>

        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default LoginForm;
