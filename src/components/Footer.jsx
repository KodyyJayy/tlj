import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">The Language Jeanie</h2>
                    <p>
                        The Language Jeanie is a place where you can find great content and resources to help you with your web development journey.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; info@mywebsite.com</span>
                    </div>
                    <div className="socials">
                        <a href="/home"><i className="fab fa-facebook"></i></a>
                        <a href="/home"><i className="fab fa-twitter"></i></a>
                        <a href="/home"><i className="fab fa-instagram"></i></a>
                        <a href="/home"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <br />
                    <ul>
                        <a href="/home"><li>Home</li></a>
                        <a href="/home"><li>About</li></a>
                        <a href="/home"><li>Services</li></a>
                        <a href="/home"><li>Contact</li></a>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <br />
                    <form action="/home" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
                        <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                        <button type="submit" className="btn btn-big">
                            <i className="fas fa-envelope"></i>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 The Language Jeanie | Designed by Kody
            </div>
        </footer>
    )
}

export default Footer