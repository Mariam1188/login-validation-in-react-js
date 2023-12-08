// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }
};

export default App;


