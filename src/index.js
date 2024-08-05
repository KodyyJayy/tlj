import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="content-wrapper">
        <App />

        <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    First Name:
                    <input type="text" name="first-name" />
                </label>
                <label htmlFor="email">
                    Your Email: 
                    <input id="email" type="email" name="email" />
                </label>
                <label>
                    Message: 
                    <textarea name="message" />
                </label>

                <button type="submit">Send</button>
            </form>
    </div>
);