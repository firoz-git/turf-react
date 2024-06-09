import React, { useState, useEffect, useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import dayjs from 'dayjs';
import './Slider.css'
import 'jquery-ui-dist/jquery-ui.css';
import 'jquery-ui-dist/jquery-ui';
import { format } from 'date-fns';
import Slide from "../components/Slide"
import img1 from '../img/Slider-v1.jpg'
import img2 from '../img/Slider-v2.jpg'
import { ThreeDots } from 'react-loader-spinner';
import Modal from '../components/Modal/Modal'


function Slider({ slots, fetchSlots }) {
    // const { slots } = props
    const formattedDate = (date) => {
        return format(date, 'dd-MMM-yy')
    }
    const [selectedDate, setSelectedDate] = useState(formattedDate(new Date()));
    const [selectedTurf, setSelectedTurf] = useState('Turf-1');
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTime, setShowTime] = useState();
    const calendarRef = useRef(null);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState()
    const [loadingAvailability, setLoadingAvailability] = useState(false); // Add loading state for availability check  
    const [users, setUsers] = useState([]); // State to store user details
    const [showBookNow, setShowBookNow] = useState(false);
    const [notBooking, setNotBooking] = useState(false);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        handleTurfSelect(selectedTurf);
        fetchUserDetails()
    }, []);
    const handleCalendarToggle = (event) => {
        console.log(event, 'iam events')
        event.preventDefault();
        setShowCalendar(!showCalendar);
        setShowBookNow(false)
        setNotBooking(false)
    };
    const handleTurfSelect = async (turf) => {
        setSelectedTurf(turf);
        console.log(turf, 'iam turf selected');
        setSelectedTimeSlot(null)
        setShowBookNow(false)
        setNotBooking(false)
        setLoadingSlots(true);  // Start loading state
        await fetchSlots()

        let TimeData = [];

        switch (turf) {
            case 'Turf-1':
                TimeData = slots.turf_1.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime }));
                break;
            case 'Turf-2':
                TimeData = slots.turf_2.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime }));
                break;
            case 'Turf-3':
                TimeData = slots.turf_3.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime }));
                break;
            case 'Turf-4':
                TimeData = slots.turf_4.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime }));
                break;
            case 'Turf-5':
                TimeData = slots.turf_5.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime }));
                break;
            default:
                console.log('Unknown turf selected');
        }
        setShowTime(TimeData);
        setLoadingSlots(false);
    };

    const handleTimeSlotSelect = (time) => {
        setSelectedTimeSlot(time)
        setShowBookNow(false)
        setNotBooking(false)
    }

    const fetchUserDetails = async () => {
        try {
            const usersCollection = collection(db, 'users');
            const snapshot = await getDocs(usersCollection);
            const userData = snapshot.docs.map(doc => doc.data());
            console.log(userData, 'iam userdata')
            // setUsers(userData);
            return userData
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };
    const convertFirebaseTimestampToDate = (timestamp) => {
        return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    }



    const checkAvailability = async () => {
        setLoadingAvailability(true); // Start loading
        const userDetails = await fetchUserDetails(); // Fetch user details

        console.log(userDetails, 'userdata await completed')
        setUsers(userDetails)
        const slotAvailable = userDetails.some(user => {

            user.date = convertFirebaseTimestampToDate(user.date)
            user.date = formattedDate(user.date)

            console.log(user.date, 'iam selected date')
            console.log(selectedDate, 'iam selected date')

            return user.turfName === selectedTurf && user.date === selectedDate &&
                user.startTime === selectedTimeSlot.startTime &&
                user.endTime === selectedTimeSlot.endTime;
        });
        console.log(!slotAvailable, 'iam slot status')
        if (slotAvailable) {
            console.log('not booking')
            setNotBooking(true)
        }
        setShowBookNow(!slotAvailable);

        setLoadingAvailability(false);
    }

    const handleBookNow = () => {
        console.log("Booking now...");
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (

        <div className="section-slider height-v">
            {showCalendar && (
                <div className="datepicker-container-Home " ref={calendarRef}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}

                    >
                        <StaticDatePicker
                            orientation="portrait"
                            disablePast
                            value={dayjs(selectedDate)}
                            onChange={(date) => {
                                console.log(date, 'iam date-1')
                                date = formattedDate(date.toDate())
                                console.log(date, 'iam date2')
                                setSelectedDate(date);
                                setShowCalendar(false);
                            }}
                        />
                    </LocalizationProvider>
                </div>
            )}


            <OwlCarousel className="owl-main owl-carousel owl-theme" items={1} autoPlay={true} autoplayTimeout={3000} loop>
                <Slide img={img1} title="Enjoy a Luxury Experience" />
                <Slide img={img2} title="Welcome to Turfee " />
            </OwlCarousel>

            <div className="check-avail">
                <div className="container">
                    <div className="arrival date-title ">
                        <label>Arrival Date </label>
                        <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                            <input className="form-control" type="text" value={selectedDate} />
                            <span className="input-group-addon"><button onClick={handleCalendarToggle} className="calendar-toggle-button">
                                <img src="images/Home-1/date-icon.png" alt="#" />
                            </button></span>


                        </div>
                    </div>
                    <div className="children date-title ">
                        <label>Select Turf</label>
                        <form>
                            <div className=" carousel-search">
                                <div className="btn-group">
                                    <a className="btn dropdown-toggle turf-style" data-toggle="dropdown">{selectedTurf}</a>
                                    <ul className="dropdown-menu" style={{ textAlign: 'center', left: -80, minWidth: 300, top: 100 }}>
                                        <li><a onClick={() => handleTurfSelect('Turf-1')}>Turf-1</a></li>
                                        <li><a onClick={() => handleTurfSelect('Turf-2')}>Turf-2</a></li>
                                        <li><a onClick={() => handleTurfSelect('Turf-3')}>Turf-3</a></li>
                                        <li><a onClick={() => handleTurfSelect('Turf-4')}>Turf-4</a></li>
                                        <li><a onClick={() => handleTurfSelect('Turf-5')}>Turf-5</a></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="children date-title ">
                        <label>Select Slot</label>
                        <form>
                            <div className=" carousel-search">
                                <div className={`btn-group ${loadingSlots ? 'loading' : ''}`} style={{ display: "flex" }}>
                                    <a className="btn dropdown-toggle time-style" data-toggle="dropdown">
                                        {loadingSlots ? (
                                            <ThreeDots height="20" width="20" color='black' ariaLabel='loading' />
                                        ) : selectedTimeSlot ? (
                                            `${selectedTimeSlot.startTime}-${selectedTimeSlot.endTime}`
                                        ) : (
                                            <img src="images/Home-1/date-icon.png" alt="#" />
                                        )}
                                    </a>
                                    <ul className="dropdown-menu" style={{ textAlign: 'center', left: 5, minWidth: 300, top: 100 }}>
                                        {showTime && showTime.map(time => (
                                            <li><a onClick={() => handleTimeSlotSelect(time)}>{time.startTime}-{time.endTime}</a></li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div className="children date-title ">
                        <label>Children</label>
                        <form>
                            <div className=" carousel-search">
                                <div className="btn-group">
                                    <a className="btn dropdown-toggle " data-toggle="dropdown" href="index.html#">2</a>
                                    <ul className="dropdown-menu">
                                        <li><a>1</a></li>
                                        <li><a>2</a></li>
                                        <li><a>3</a></li>
                                        <li><a>4</a></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div> */}
                    <div className={`find_btn date-title ${!selectedTimeSlot ? 'disabled' : ''}`}>
                        <div className="text-find" onClick={showBookNow ? handleBookNow : checkAvailability}>
                            {loadingAvailability ? (
                                <div className="loader-container">
                                    <ThreeDots height="50" width="50" color='black' ariaLabel='loading' />
                                </div>
                            ) : notBooking ? (
                                <>
                                    Not
                                    <br />Availabe
                                </>
                            ) : showBookNow ? (
                                <>
                                    Slot Available
                                    <br />
                                    Book Now
                                </>
                            ) : (
                                <>
                                    Check
                                    <br />Availability
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`section-slider height-v ${showModal ? 'blurred' : ''}`}>
                {/* existing JSX code */}

                <Modal showModal={showModal} handleClose={handleCloseModal}/>
                    {/* <h2>Booking Details</h2>
                    <p>Enter your booking information here.</p>
                </Modal> */}
            </div>

        </div>

    );
}

export default Slider
