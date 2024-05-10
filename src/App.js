import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reserve from './pages/Reserve';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='/reservation' element={<Reserve />} />
                </Routes>
                <Routes>
                    <Route path='/about' element={<About />} />
                </Routes>
                <Routes>
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>

        </div>
    );
}

export default App;
