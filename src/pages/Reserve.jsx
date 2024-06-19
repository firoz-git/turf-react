import React, { useEffect, useState } from 'react';
import './Reserve.css';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import DateClick from '../components/DateClick';
import Booking from '../section/Booking';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Circles } from 'react-loader-spinner';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';





  function Reserve() {
    const [loading, setLoading] = useState(true);
    const [slots, setSlots] = useState({
      turf_1: [],
      turf_2: [],
      turf_3: [],
      turf_4: [],
      turf_5: [],
    });
  
    useEffect(() => {
      fetchSlots();
    }, []);
  
    const fetchSlots = async () => {
      try {
        const slotsCollection = collection(db, 'slots');
        const snapshot = await getDocs(slotsCollection);
        const data = snapshot.docs.map(doc => doc.data());
        const Turf_1 = data.filter(slot => slot.name === 'Turf-1');
        const Turf_2 = data.filter(slot => slot.name === 'Turf-2');
        const Turf_3 = data.filter(slot => slot.name === 'Turf-3');
        const Turf_4 = data.filter(slot => slot.name === 'Turf-4');
        const Turf_5 = data.filter(slot => slot.name === 'Turf-5');
  
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
        setLoading(false);
      }
    };
 
  return (
    <div>
      <Header />
      <section className="banner-tems text-center">
        <div className="container">
          <div className="banner-content">
            <h2>RESERVATION</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
          </div>
        </div>
      </section>
      {loading ? (
        <div className="loading-container">
          <Circles color="#000" />
        </div>
      ) : (
        <Booking slots={slots} />
      )}
      <Footer />
      <a title="scroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>
    </div>
  );
}

export default Reserve