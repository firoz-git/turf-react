import React, { useState, useEffect } from 'react'
import { MdOpacity } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Book.css'
import img1 from '../img/turf-2.jpg'
import img2 from '../img/turf-1.jpg'
import img3 from '../img/turf-3.jpg'
import img4 from '../img/turf-4.jpg'
import img5 from '../img/turf-5.jpg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Booking = (props) => {
    console.log(props, 'iam propcheck')
    const { slots } = props
    const images = [
        { id: 1, src: img1, label: '5s One' },
        { id: 2, src: img2, label: '5s Two' },
        { id: 3, src: img3, label: '5s Three' },
        { id: 4, src: img4, label: '7s full' },
        { id: 5, src: img5, label: '9s Full' },
    ];

    const [activeImage, setActiveImage] = useState(images[0].src);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false); // Add this state to manage calendar visibility

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const slotsCollection = collection(db, 'slots');
    //         const snapshot = await getDocs(slotsCollection);
    //         const data = snapshot.docs.map(doc => doc.data());
    //         console.log(data,'iam data')

    //         setSlots({
    //             morning: data.filter(slot => slot.section === 'Morning'),
    //             afternoon: data.filter(slot => slot.section === 'Afternoon'),
    //             evening: data.filter(slot => slot.section === 'Evening'),
    //         });
    //     };

    //     fetchData();
    // }, []);

    // const slots = {
    //     morning: ['07:00 AM-08:00 AM', '8:00 AM-09:00 AM', '9:00 AM-10:00 AM', '11:00 AM-12:00 AM'],
    //     afternoon: ['12:00 PM-01:00 PM', '1:00 PM-02:00 PM', '2:00 PM-03:00 PM', '3:00 PM-04:00 PM'],
    //     evening: ['4:00 PM-05:00 PM', '5:00 PM-06:00 PM', '6:00 PM-07:00 PM', '7:00 PM-08:00 PM'],
    // };

    const renderSlots = (timeOfDay) => {
        return slots[timeOfDay].map((slot, index) => (
            <button key={index} className="slot-button">{slot}</button>
        ));
    };






    console.log(showCalendar, 'iam calender')

    console.log(activeImage, 'iam image')


    const handleImageChange = (src) => {
        setActiveImage(src);
    };
    const incrementDate = (e) => {
        e.preventDefault();
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
    };

    const decrementDate = (e) => {
        e.preventDefault();
        setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
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
                                <ul>
                                    {images.map(image => (
                                        <li
                                            key={image.id}
                                            className={activeImage === image.src ? "active" : ""}
                                            onClick={() => handleImageChange(image.src)}
                                        >
                                            {image.label}
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
                                        <div className="datepicker-container">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date) => {
                                                    setSelectedDate(date);
                                                    setShowCalendar(false);
                                                }}
                                                shouldCloseOnSelect={true}
                                                onClickOutside={() => setShowCalendar(false)}
                                                inline
                                            />
                                        </div>
                                    )}
                                    <div className="slot-booking">
                                        <div className="slot-section">
                                            <h4>Morning Section</h4>
                                            <div className="slots">{renderSlots('morning')}</div>
                                        </div>
                                        <div className="slot-section">
                                            <h4>Afternoon Section</h4>
                                            <div className="slots">{renderSlots('afternoon')}</div>
                                        </div>
                                        <div className="slot-section">
                                            <h4>Evening Section</h4>
                                            <div className="slots">{renderSlots('evening')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Booking
