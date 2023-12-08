import React, { useState } from 'react';


function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleForgotPassword() {
        if (email) {
            setSuccessMessage(`Instructions to reset the password sent to ${email}`);
            setErrorMessage("");
        } else {
            setErrorMessage("Please provide a valid email address.");
            setSuccessMessage("");
        }
    }

    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <h2 style={styles.header}>Forgot Password</h2>
                <label htmlFor="email" style={styles.label}>
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />

                <button type="button" onClick={handleForgotPassword} style={styles.button}>
                    Reset Password
                </button>

                {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            </form>
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

export default ForgotPasswordForm;