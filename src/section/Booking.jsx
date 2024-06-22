import React, { useState, useEffect, useRef } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import dayjs from 'dayjs';
import './Book.css'
import img1 from '../img/turf-2.jpg'
import img2 from '../img/turf-1.jpg'
import img3 from '../img/turf-3.jpg'
import img4 from '../img/turf-4.jpg'
import img5 from '../img/turf-5.jpg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../components/Modal/Modal'
import { format } from 'date-fns';



const Booking = ({ slots }) => {

    // const { slots } = props

    const formattedDate = (date) => {
        return format(date, 'dd-MMM-yy')
    }
    const images = [
        { id: 1, src: img1, label: '5s One', name: 'turf_1' },
        { id: 2, src: img2, label: '5s Two', name: 'turf_2' },
        { id: 3, src: img3, label: '5s Three', name: 'turf_3' },
        { id: 4, src: img4, label: '7s full', name: 'turf_4' },
        { id: 5, src: img5, label: '9s Full', name: 'turf_5' },
    ];

    const [activeImage, setActiveImage] = useState(images[0].src);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false); // Add this state to manage calendar visibility
    const calendarRef = useRef(null);
    const [slotData, setSlots] = useState({ morning: [], afternoon: [], evening: [] })
    const [turfName, setSelectedTurf] = useState('turf_1')
    const [showModal, setShowModal] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null); // Add this state to store selected slot details
    const [user, setUsers] = useState([])
    const [allSlotData, setSlotTime] = useState()

    //console.log(slotData, 'iam slotdta filtered')
    useEffect(() => {

        slotSetting();

        fetchUserDetails();

        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [turfName, selectedDate]);


    console.log(selectedSlot, 'iam selectedSlot data')

    const handleImageChange = (image) => {
        setActiveImage(image.src);
        setSelectedTurf(image.name)
    };



    const slotSetting = async () => {
        const selectedSlots = slots[turfName] || [];
        // console.log(selectedSlots, 'iam slots from app')
        setSlots({
            morning: selectedSlots.filter(slot => slot.section === 'Morning'),
            afternoon: selectedSlots.filter(slot => slot.section === 'Afternoon'),
            evening: selectedSlots.filter(slot => slot.section === 'Evening'),
        });
    };


    const fetchUserDetails = async () => {
        try {
            const usersCollection = collection(db, 'users');
            const snapshot = await getDocs(usersCollection);
            const userData = snapshot.docs.map(doc => doc.data());
            //console.log(userData, 'iam userdata')
            setUsers(userData);
            return userData
        } catch (error) {
            //console.error('Error fetching user details:', error);
        }
    };
    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        // Replace underscores with hyphens and capitalize the first letter
        return string.replace(/_/g, '-').charAt(0).toUpperCase() + string.slice(1).replace(/_/g, '-');
    };

    const isSlotBooked = (slot) => {
        const selectedFormattedDate = formattedDate(selectedDate);

        const returnData = user.some(user => {
            // console.log(user.turfName, '=', capitalizeFirstLetter(turfName))
            const turfNameMatch = user.turfName === capitalizeFirstLetter(turfName);
            // console.log(turfNameMatch,'iam match turf')
            // console.log(user.date, '=', selectedFormattedDate)

            const dateMatch = user.date === selectedFormattedDate;
            // console.log(dateMatch,'iam date match')
            // console.log(user.slots, '=', slot)

            const slotMatch = user.slots.some(userSlot =>
                userSlot.startTime === slot.startTime && userSlot.endTime === slot.endTime
            );
            // console.log(turfNameMatch, '=', dateMatch, '=', slotMatch)
            return turfNameMatch && dateMatch && slotMatch;
        });

        // console.log(`Checking slot: ${slot.startTime}-${slot.endTime}`);
        // console.log(returnData, 'iam status return');
        return returnData;
    };

    const incrementDate = (e) => {
        e.preventDefault();
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
    };

    const decrementDate = (e) => {
        e.preventDefault();
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 1);
        const today = new Date();
        console.log(formattedDate(newDate), '=', formattedDate(today))
        if (formattedDate(newDate) >= formattedDate(today)) {
            setSelectedDate(newDate);
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleBookNow = (e, slot) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("Booking now...", slot);
        setSelectedSlot(slot);

        let TimeData = [];

        switch (slot.name) {
            case 'Turf-1':
                TimeData = slots.turf_1.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime, price: slot.price }));
                break;
            case 'Turf-2':
                TimeData = slots.turf_2.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime, price: slot.price }));
                break;
            case 'Turf-3':
                TimeData = slots.turf_3.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime, price: slot.price }));
                break;
            case 'Turf-4':
                TimeData = slots.turf_4.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime, price: slot.price }));
                break;
            case 'Turf-5':
                TimeData = slots.turf_5.map(slot => ({ startTime: slot.startTime, endTime: slot.endTime, price: slot.price }));
                break;
            default:
            // //console.log('Unknown turf selected');
        }
        setSlotTime(TimeData);
        setShowModal(true);

    };
    return (
        <div className="container">
            <div className="reservation-page">
                <div className="row">
                    <div className=" col-lg-9 col-md-8 col-sm-12 col-xs-12 mx-auto">
                        <div className="reservation_content" style={{
                            backgroundImage: `url(${activeImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <div className="reservation_step">
                                <ul className='  text-uppercase'>
                                    {images.map(image => (
                                        <li
                                            key={image.id}
                                            className={activeImage === image.src ? "active" : ""}
                                            onClick={() => handleImageChange(image)}
                                        >
                                            <a  href="#">{image.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="reservation-calendar_custom">
                                    <div className="reservation-calendar_title">
                                        <a onClick={() => setShowCalendar(!showCalendar)} style={{ cursor: 'pointer' }}>
                                            <span className="reservation-calendar_date" style={{ marginRight: '5px' }}>
                                                {selectedDate.getDate()}
                                            </span>
                                            <span className="reservation-calendar_month">
                                                {selectedDate.toLocaleString('default', { month: 'long' }).toUpperCase()}
                                            </span>
                                            <span className="reservation-calendar_year"> {selectedDate.getFullYear()}</span>
                                        </a>
                                        <a href="#" className="reservation-calendar_prev reservation-calendar_corner" onClick={decrementDate}>
                                            <i className="ion-ios-arrow-thin-left"></i>
                                        </a>
                                        <a href="#" className="reservation-calendar_next reservation-calendar_corner" onClick={incrementDate}>
                                            <i className="ion-ios-arrow-thin-right"></i>
                                        </a>
                                    </div>
                                    {showCalendar && (
                                        <div className="datepicker-container" ref={calendarRef}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}

                                            >
                                                <StaticDatePicker
                                                    orientation="portrait"
                                                    disablePast
                                                    value={dayjs(selectedDate)}
                                                    onChange={(date) => {
                                                        setSelectedDate(date.toDate());
                                                        setShowCalendar(false);
                                                    }}
                                                />
                                            </LocalizationProvider>
                                        </div>
                                    )}

                                    <div className="slot-booking">
                                        {['morning', 'afternoon', 'evening'].map(timeOfDay => (
                                            <div className="slot-section" key={timeOfDay}>
                                                <h4>{timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} Section</h4>
                                                <div className="slots">
                                                    {slotData[timeOfDay].sort((a, b) => a.startTime.localeCompare(b.startTime)).map((slot, index) => (
                                                        <button
                                                            key={index}
                                                            className="btn btn-room"
                                                            style={{ marginRight: 10, marginBottom: 10 }}
                                                            onClick={(e) => handleBookNow(e, slot)}
                                                            disabled={isSlotBooked(slot)}
                                                        >
                                                            {slot.startTime}-{slot.endTime}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`section-slider height-v ${showModal ? 'blurred' : ''}`}>
                {/* existing JSX code */}

                <Modal showModal={showModal} slotData={selectedSlot}
                    turfName={capitalizeFirstLetter(turfName)}
                    selectedDate={formattedDate(selectedDate)}
                    allSlotData={allSlotData} handleClose={handleCloseModal} fetchUserDetails={fetchUserDetails} />
                {/* <h2>Booking Details</h2>
                    <p>Enter your booking information here.</p>
                </Modal> */}
            </div>
        </div >


    )
}

export default Booking
