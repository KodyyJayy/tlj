import '../css/contact.css'

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="contact-form-inner">
                <h1>GET IN TOUCH:</h1>
                <h1>Got a question? Email us through our contact form!</h1>
                <iframe title="Contact Form" src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/f6afb8ca-9c70-47a7-b15e-13f5174626b6" referrerPolicy="origin" sandbox="allow-forms allow-popups allow-scripts allow-same-origin" height="620px" width="100%" frameBorder={0}></iframe>
            </div>

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

        
        
    )
}

export default Contact 