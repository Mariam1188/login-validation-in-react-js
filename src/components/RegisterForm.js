import React, { useState } from 'react';
import Form from './Form';

function RegisterForm({ onClose, isVisible }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleRegister() {
        if (password === confirmPassword) {
            setSuccessMessage(`User ${username} registered successfully!`);
            setErrorMessage("");
        } else {
            setErrorMessage("Passwords do not match.");
            setSuccessMessage("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleRegister();
    
        if (!errorMessage) {
            onClose();
        }
    }

    return (
        <div style={styles.container}>
            <Form onSubmit={handleSubmit} style={styles.form} isVisible={isVisible}>
                <h2 style={styles.header}>Register</h2>
                <label htmlFor="username" style={styles.label}>
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                    required
                />

                <label htmlFor="password" style={styles.label}>
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />

                <label htmlFor="confirmPassword" style={styles.label}>
                    Confirm Password:
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={styles.input}
                    required
                />

                <button type="submit" style={styles.button}>
                    Register
                </button>

                {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            </Form>
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

export default RegisterForm;