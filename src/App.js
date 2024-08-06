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
import Footer from './components/Footer';

import './css/main.css';

const App = () => {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="home" exact element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ScrollToTop />
            <Footer />
        </Router>
    )
}

export default App;