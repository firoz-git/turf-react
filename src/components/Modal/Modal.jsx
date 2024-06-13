// Modal.js
import React, { useState,useEffect } from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ showModal, slotData, turfName, selectedDate, allSlotData, handleClose}) => {

    console.log(slotData,'=',turfName,'=',selectedDate,'=',allSlotData)


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });

    useEffect(() => {
        if (allSlotData) {
            setAvailableSlots(allSlotData);
        }
        if(slotData){
            setSelectedSlots([slotData])
        }
    }, [allSlotData,slotData]); 

    useEffect(() => {
        if (allSlotData) {
            const filteredSlots = allSlotData.filter(slot => 
                !selectedSlots.some(selectedSlot => 
                    selectedSlot.startTime === slot.startTime && selectedSlot.endTime === slot.endTime
                )
            );
            setAvailableSlots(filteredSlots);
        }
    }, [selectedSlots, allSlotData]);

    const handleAddSlotClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSlotSelect = (slot) => {
        console.log(slot,'iam slot modal')
        setSelectedSlots([...selectedSlots, slot]);
        setDropdownVisible(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleConfirmBooking = () => {
        // Handle the booking confirmation logic here
        console.log('Booking confirmed with details:', formData, selectedSlots);
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
                        <button className="modal-close" onClick={handleClose}>X</button>
                        <div className="sidebar" style={{ marginRight: 0, marginBottom: 30 }}>
                            <div className="reservation-room-selected ">
                                <h2 className="reservation-heading">Turf Booking Details</h2>
                                <div className="content-room ">
                                    <div className="room">Turf-1<span><button className="btn btn-room" onClick={handleAddSlotClick}>ADD SLOTS</button></span>
                                        {dropdownVisible && (
                                            <div className="slot-dropdown">
                                                {availableSlots.map((slot, index) => (
                                                    <div key={index} className="slot-dropdown-item" onClick={() => handleSlotSelect(slot)}>
                                                        {slot.startTime} - {slot.endTime}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="room">12-Jun-2024</div>
                                    {/* <div className="room1">09:00 AM-10:00 AM<span>₹500.00</span></div> */}

                                </div>
                                {/* <div className="content-room ">
                                    <div className="room1">09:00 AM-10:00 AM<span>₹500.00</span></div>

                                </div> */}
                                {selectedSlots.map((slot, index) => (
                                    <div key={index} className="content-room">
                                        <div className="room1 extra">{slot.startTime}-{slot.endTime}<span>₹500.00</span></div>
                                    </div>
                                ))}
                                <div className="total total-3">
                                    TOTAL <span>$1000.00</span>
                                </div>
                                <div className="content-room border-top" >
                                    <h2>heelo</h2>
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
                                            <input className="field-text" placeholder="Email"
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-sm-6 col-lg-4">
                                            <input className="field-text" placeholder="Phone"
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        {/* <div className="col-sm-12">
                                            <input type="text" className="field-text" name="subject" placeholder="Subject" />
                                        </div> */}
                                        <div className="col-sm-3 col-lg-8" style={{ marginTop: 20, float: 'right' }}>
                                            <button type="submit" className="btn btn-room" onClick={handleConfirmBooking}>Confirm Booking</button>
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
