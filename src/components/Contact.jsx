import '../css/contact.css'

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="contact-form-inner">
                <h1>GET IN TOUCH:</h1>
                <h1>Got a question? Email us through our contact form!</h1>
                <iframe title="Contact Form" src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/f6afb8ca-9c70-47a7-b15e-13f5174626b6" referrerPolicy="origin" sandbox="allow-forms allow-popups allow-scripts allow-same-origin" height="620px" width="100%" frameBorder={0}></iframe>
            </div>

            <form name="contact" method="POST" netlify onSubmit="submit">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
                </form>
            
        </div>

        
        
    )
}

export default Contact 