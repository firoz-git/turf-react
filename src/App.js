import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reserve from './pages/Reserve';
import Contact from './pages/Contact';
import About from './pages/About';
import { db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { Circles } from 'react-loader-spinner'


function App() {
    const [slots, setSlots] = useState({
        turf_1: [],
        turf_2: [],
        turf_3: [],
        turf_4: [],
        turf_5: [],
    });
    const [loading, setLoading] = useState(true);

    const fetchSlots = async () => {
        try {
            // console.log(data,'iam fetchdata')
            const slotsCollection = collection(db, 'slots');
            const snapshot = await getDocs(slotsCollection);
            const data = snapshot.docs.map(doc => doc.data());
            console.log(data, 'iam data')
            console.log('fetch call cehck')
            const Turf_1 = data.filter(slot => slot.name === 'Turf-1')
            const Turf_2 = data.filter(slot => slot.name === 'Turf-2')
            const Turf_3 = data.filter(slot => slot.name === 'Turf-3')
            const Turf_4 = data.filter(slot => slot.name === 'Turf-4')
            const Turf_5 = data.filter(slot => slot.name === 'Turf-5')
            // const Turf_1 = data.filter(slot => slot.name === 'Turf-1').map(slot => `${slot.startTime}-${slot.endTime}`);
            setSlots({
                turf_1: Turf_1,
                turf_2: Turf_2,
                turf_3: Turf_3,
                turf_4: Turf_4,
                turf_5: Turf_5,
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching slot data: ', error);
        }
    };

    useEffect(() => {
        console.log(loading,'iam fecthing')
        fetchSlots();
    }, []);


    if (loading) {
        return (
            <div className="loader-container">
                <Circles height="50" width="50" color='black' ariaLabel='loading' />
            </div>
        );
    }
    return (
        <div>
            {/* <Header /> */}
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home SlotData={slots} fetchSlots={fetchSlots} />} />
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
