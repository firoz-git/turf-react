import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reserve from './pages/Reserve';
import Contact from './pages/Contact';
import About from './pages/About';
import { db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { Circles  } from 'react-loader-spinner'
import { Grid  } from 'react-loader-spinner'
import { Hearts  } from 'react-loader-spinner'
import { Hourglass  } from 'react-loader-spinner'
import { InfinitySpin  } from 'react-loader-spinner'
import { LineWave  } from 'react-loader-spinner'
import { MagnifyingGlass  } from 'react-loader-spinner'
import { MutatingDots  } from 'react-loader-spinner'
import { Oval  } from 'react-loader-spinner'
import { ProgressBar  } from 'react-loader-spinner'
import { Puff  } from 'react-loader-spinner'
import { Radio  } from 'react-loader-spinner'
import { RevolvingDot  } from 'react-loader-spinner'
import { Rings  } from 'react-loader-spinner'
import { RotatingLines  } from 'react-loader-spinner'
import { RotatingSquare  } from 'react-loader-spinner'
import { RotatingTriangles  } from 'react-loader-spinner'
import { TailSpin  } from 'react-loader-spinner'
import { ThreeCircles  } from 'react-loader-spinner'
import { ThreeDots  } from 'react-loader-spinner'
import { Triangle  } from 'react-loader-spinner'
import { Vortex  } from 'react-loader-spinner'
import { Watch  } from 'react-loader-spinner'
import { BiAlignMiddle } from 'react-icons/bi';
import { red } from '@mui/material/colors';
import Header from './components/Header/Header';


function App() {
    const [slots, setSlots] = useState({
        morning: [],
        afternoon: [],
        evening: []
    });
    const [loading, setLoading] = useState(true);

    const fetchSlots = async () => {
        try {
            const slotsCollection = collection(db, 'slots');
            const snapshot = await getDocs(slotsCollection);
            const data = snapshot.docs.map(doc => doc.data());
            console.log(data, 'iam data')
            const morningSlots = data.filter(slot => slot.section === 'Morning').map(slot => `${slot.startTime}-${slot.endTime}`);
            const afternoonSlots = data.filter(slot => slot.section === 'Afternoon').map(slot => `${slot.startTime}-${slot.endTime}`);
            const eveningSlots = data.filter(slot => slot.section === 'Evening').map(slot => `${slot.startTime}-${slot.endTime}`);
            console.log(morningSlots, 'iam morning slots')
            setSlots({
                morning: morningSlots,
                afternoon: afternoonSlots,
                evening: eveningSlots,
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching slot data: ', error);
        }
    };

    useEffect(() => {
        console.log('iam fecthing')
        fetchSlots();
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <Circles height="50" width="50" color='white' ariaLabel='loading' />
            </div>
        );
    }
    return (
        <div>
            {/* <Header /> */}
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='/reservation' element={<Reserve SlotData={slots} />} />
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
