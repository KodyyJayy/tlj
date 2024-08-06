import React, { useState } from 'react';
import '../css/contact.css';

const Contact = () => {
    const [messageLength, setMessageLength] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleMessageChange = (event) => {
        setMessageLength(event.target.value.length);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsEmailValid(emailPattern.test(emailValue));
    };

    const isFormValid = () => {
        return messageLength >= 40 && firstName.trim() !== '' && isEmailValid;
    };

    const resetForm = (form) => {
        setMessageLength(0);
        setFirstName('');
        setIsEmailValid(false);
        form.reset();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        setIsSubmitting(true);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                resetForm(form);
                setSubmitSuccess(true);
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 3000);
            })
            .catch((error) => alert(error))
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-form">
            <div className="contact-form-inner">
                <h1>GET IN TOUCH:</h1>
                <h1>Got a question? Email us through our contact form!</h1>
                
                <div className="form-wrapper">
                    <form name="contact" method="POST" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <input type="hidden" name="form-name" value="contact" autoComplete="off"/>
                        </div>
                        
                        <div className="form-field">
                            <input type="text" id="first-name" name="first-name" autoComplete="off" placeholder="Enter your first name..." required onChange={handleFirstNameChange} value={firstName} />
                            <label htmlFor="first-name">First Name</label>
                        </div>

                        <div className="form-field">
                            <input id="email" type="email" name="email" autoComplete="off" placeholder="Enter your email address..." required onChange={handleEmailChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                            <label htmlFor="email">Email Address</label>
                        </div>

                        <div className="form-field form-field--spaced">
                            <textarea id="message" name="message" autoComplete="off" placeholder="Enter your message..." minLength={40} maxLength={2000} required onChange={handleMessageChange} />
                            <label htmlFor="message">Message</label>
                            <legend>
                                <span id="message_characters">{messageLength}</span> / 40 characters minimum
                            </legend>
                        </div>

                        <button
                            className={`send-message ${submitSuccess ? 'send-message--success' : ''}`}
                            type="submit"
                            disabled={isSubmitting || !isFormValid()}
                        >
                            {submitSuccess ? 'Success!' : isSubmitting ? 'Submitting...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;