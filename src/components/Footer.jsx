import '../css/footer.css'

import Logo from '../media/logo.webp'

const Footer = () => {
    return (
        <footer className="footer">
            <p>Designed by Kody</p>
            <div className="footer-inner">
                <a href="/home"><img alt="" src={Logo} draggable="false" /></a>
                <p>© 2024 The Language Jeanie</p>
            </div>
        </footer>
    )
}

export default Footer