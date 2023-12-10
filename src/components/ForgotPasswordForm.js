import React, { useState } from 'react';
import Form from './Form';

function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    async function handleForgotPassword() {
        try {
            const response = await fetch("https://example.com/api/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccessMessage(`Instructions to reset the password sent to ${email}`);
                setErrorMessage("");
                setIsVisible(false); 
            } else {
                const data = await response.json();
                setErrorMessage(data.message || "Password reset failed. Please try again.");
                setSuccessMessage('');
            }
        } catch (error) {
            console.log("Error during forgot password:", error);
            setErrorMessage("An unexpected error occurred. Please try again later.");
            setSuccessMessage("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleForgotPassword();
    }

    return (
        <div style={styles.container}>
            <Form onSubmit={handleSubmit} style={styles.form} isVisible={isVisible}>
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

                <button type="submit" style={styles.button}>
                    Reset Password
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

export default ForgotPasswordForm;