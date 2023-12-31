
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm';
import RegisterForm from './RegisterForm';
import Form from './Form';


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function validateLogin() {

    try {

      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        setError("");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.log("Error during login:", error);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPasswordClick() {
    setIsForgotPasswordVisible(true);
  }

  function handleRegisterClick() {
    setIsRegisterVisible(true);
  }

  return (
    <div style={styles.container}>
      <Form onSubmit={validateLogin} style={styles.form} isVisible={!isForgotPasswordVisible}>
        <h2 style={styles.header}>Login</h2>
        <label htmlFor="username" style={styles.label}>Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} required />

        <label htmlFor="password" style={styles.label}>Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />

        <button type="submit" style={styles.button} disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.additionalLinks}>
          <p>
            <Link to="#" onClick={handleForgotPasswordClick}>
              Forgot your password?
            </Link>
          </p>
          <p>
            Don't have an account? <Link to="#" onClick={handleRegisterClick}>Register here</Link>
          </p>
        </div>
      </Form>
      {isForgotPasswordVisible && <ForgotPasswordForm onClose={() => setIsForgotPasswordVisible(false)} />}
      {isRegisterVisible && <RegisterForm onClose={() => setIsRegisterVisible(false)} />}
    </div>
  );
}

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
