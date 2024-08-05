import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
/*import Footer from './components/Footer';*/

import './css/main.css';

const App = () => {
    return (

        <>

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

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="home" exact element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ScrollToTop />
        </Router>

        </>
    )
}

export default App;