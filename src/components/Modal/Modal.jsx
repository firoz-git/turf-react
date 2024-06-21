// Modal.js
import React, { useState, useEffect, useMemo } from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import CloseButton from 'react-bootstrap/CloseButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
// 

const Modal = ({ showModal, slotData, turfName, selectedDate, allSlotData, handleClose, fetchUserDetails }) => {

    console.log(slotData, '=', turfName, '=', selectedDate, '=', allSlotData)


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [date, setDate] = useState([]);
    const [turf, setTurf] = useState([]);
    const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [userDetails, setUserDetails] = useState([]);


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;


    useEffect(() => {
        if (allSlotData) {
            setAvailableSlots(allSlotData);
        }
        if (slotData) {
            setSelectedSlots([slotData])
        }
        if (selectedDate) {
            setDate(selectedDate)
        }
        if (turfName) {
            setTurf(turfName)
        }
    }, [allSlotData, slotData, selectedDate, turfName]);

    // useEffect(() => {
    //     const validateForm = () => {
    //         const { name, email, mobile } = formData;
    //         if (name && email && mobile) {
    //             setIsFormValid(true);
    //         } else {
    //             setIsFormValid(false);
    //         }
    //     };

    //     validateForm();
    // }, [formData]);

    useEffect(() => {
        const validateForm = () => {
            const { name, email, mobile } = formData;
            let isValid = true;

            if (!name || !email || !mobile) {
                isValid = false;
            }
            if (!emailRegex.test(email)) {
                setEmailError('Provide Valid email format');
                isValid = false;
            } else {
                setEmailError('');
            }
            if (!mobileRegex.test(mobile)) {
                setMobileError('Mobile number must be 10 digits');
                isValid = false;
            } else {
                setMobileError('');
            }

            setIsFormValid(isValid);
        };

        validateForm();
    }, [formData]);

    useEffect(() => {
        if (showModal) {
            const getUserDetails = async () => {
                const user = await fetchUserDetails();
                console.log(user, 'iam fected user')
                setUserDetails(user);
            };
            getUserDetails();
        }
    }, [showModal, fetchUserDetails]);

    useEffect(() => {
        if (allSlotData) {
            const filteredSlots = allSlotData.filter(slot =>
                !selectedSlots.some(selectedSlot =>
                    selectedSlot.startTime === slot.startTime && selectedSlot.endTime === slot.endTime
                )
            );
            // TODO ADDING THE REMOVE SLOTS
            const disableSlots = filteredSlots.map(slot => {
                const isBooked = userDetails.some(user => {
                    console.log(user.turfName, '=', turf)
                    const turfNameMatch = user.turfName === turf;
                    // console.log(turfNameMatch, 'iam match-1')
                    console.log(user.date, '=', date)
                    const dateMatch = user.date === date;
                    // console.log(dateMatch, 'iam match-2')

                    const slotMatch = user.slots.some(userSlot =>
                        userSlot.startTime === slot.startTime && userSlot.endTime === slot.endTime
                    );
                    return turfNameMatch && dateMatch && slotMatch;
                });

                return {
                    ...slot,
                    disabled: isBooked
                };
            });
            setAvailableSlots(disableSlots);
        }
    }, [selectedSlots, allSlotData, userDetails, turf, date]);



    const handleAddSlotClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSlotSelect = (slot) => {
        console.log(slot, 'iam slot modal')
        setSelectedSlots([...selectedSlots, slot]);
        setDropdownVisible(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleConfirmBooking = async (e) => {
        // Handle the booking confirmation logic here

        e.preventDefault();
        setIsFormValid(false);

        setIsLoading(true);
        formData.totalPrice = totalPrice
        formData.slots = selectedSlots
        formData.date = date
        formData.turfName = turf
        formData.status = true
        console.log('Booking confirmed with details:', formData, date);
        try {
            const docRef = await addDoc(collection(db, 'users'), formData);
            toast.success('Booking Completed successfully!');
            console.log('Document written with ID: ', docRef.id);

            const emailParams = {
                from_name: formData.name,
                to_email: formData.email,
                turf_name: turfNames[turf], // Turf name
                slot_details: selectedSlots.map(slot => `${slot.startTime} - ${slot.endTime}`).join(', '), // Slot details
                total_price: totalPrice,
                booking_id: docRef.id
            };
            const emailId = 'service_yx0fphs'
            const templateId = 'template_4e8ig96'
            const userId = 'VBadOdGgUaqhyI3yW'

            await emailjs.send(emailId, templateId, emailParams, userId).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }
            );

            setIsLoading(false); // Stop loading    
            handleClose();
            resetForm(); // Reset form data
        } catch (error) {
            toast.error('Error Booking. Please try again.');
            console.error('Error adding document: ', error);
            handleClose();
            resetForm();
            setIsLoading(false); // Stop loading on error
        }
    };

    const resetForm = () => {
        setSelectedSlots([]);
        setFormData({ name: '', mobile: '', email: '' });
        setDate([]);
        setTurf([]);
        setDropdownVisible(false);
    };

    const totalPrice = useMemo(() => {
        return selectedSlots.reduce((total, slot) => parseInt(total) + parseInt(slot.price), 0);
    }, [selectedSlots]);

    console.log(totalPrice, 'iam selected tpotale')


    const turfNames = {
        'Turf-1': 'Turf 5s A',
        'Turf-2': 'Turf 5s B',
        'Turf-3': 'Turf 5s C',
        'Turf-4': 'Turf 7s A',
        'Turf-5': 'Turf 9s A'
    };

    if (!showModal) {
        return null;
    }

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className="modal-overlay row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="modal-content col-lg-12 col-md-12 col-sm-6 col-xs-6"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="modal-close" onClick={handleClose}>Close</button>
                        <div className="sidebar" style={{ marginRight: 0, marginBottom: 30 }}>
                            <div className="reservation-room-selected ">
                                <h2 className="reservation-heading">Turf Booking Details</h2>
                                <div className="content-room ">
                                    <div className="room">{turfNames[turf]}<span><button className="btn btn-room" onClick={handleAddSlotClick}>ADD SLOTS</button></span>
                                        {dropdownVisible && (
                                            <div className="slot-dropdown">
                                                {availableSlots.map((slot, index) => (
                                                    <div key={index} className="slot-dropdown-item" onClick={() => slot.disabled ? null : handleSlotSelect(slot)}>
                                                        {slot.startTime} - {slot.endTime} {slot.disabled && '(Booked)'}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="room">{date}</div>
                                    {/* <div className="room1">09:00 AM-10:00 AM<span>₹500.00</span></div> */}

                                </div>
                                {/* <div className="content-room ">
                                    <div className="room1">09:00 AM-10:00 AM<span>₹500.00</span></div>

                                </div> */}
                                {selectedSlots.map((slot, index) => (
                                    <div key={index} className="content-room">
                                        <div className="room1 extra">{slot.startTime}-{slot.endTime}<span>₹ {slot.price}</span></div>
                                    </div>
                                ))}
                                <div className="total total-3">

                                    TOTAL <span>₹ {totalPrice}</span>
                                </div>
                                <div className="content-room border-top" >
                                    <h2>Pay Here</h2>
                                </div>
                                <div className="content-room border-top" >
                                    <img src="images/Home-1/about-2.jpg" alt="" />
                                </div>

                                <div className="contact-form content-room border-top" style={{ marginTop: 40 }}>
                                    <form >
                                        <div className="col-sm-6 col-lg-4">
                                            <input className="field-text"
                                                placeholder="Name"
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <input className="field-text" placeholder='Enter Email'
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <input className="field-text" placeholder='Enter Mobile'
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-sm-3 col-lg-8" style={{ marginTop: 20, float: 'right' }}>
                                            <button type="submit" className="btn btn-room" onClick={handleConfirmBooking} disabled={!isFormValid}>{isLoading ? 'Booking Progress....' : !isFormValid ? 'Provide Valid Data' : 'Confirm Booking'}</button>
                                            <label htmlFor="" style={{ fontSize: 10 }}>{emailError || mobileError}</label>
                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

    );
};

export default Modal;
