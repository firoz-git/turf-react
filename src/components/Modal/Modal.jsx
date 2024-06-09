// Modal.js
import React from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ showModal, handleClose, children }) => {
    if (!showModal) {
        return null;
    }

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="modal-close" onClick={handleClose}>X</button>
                        {children}

                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="sidebar" style={{ marginRight: 0, marginBottom: 30 }}>
                                    <div className="reservation-room-selected ">
                                        <h2 className="reservation-heading">Select Rooms</h2>
                                        <div className="content-room ">
                                            <div className="room">ROOM 1 <span>2 Adult, 1 Child</span></div>
                                            <div className="room1">LUXURY ROOM <span>$500.00</span></div>
                                            <a href="reservation_4.html#" title="">Change Room</a>
                                        </div>
                                        <div className="content-room border-top">
                                            <div className="room">ROOM 2 <span>2 Adult, 1 Child</span></div>
                                            <div className="room1">LUXURY ROOM <span>$500.00</span></div>
                                            <a href="reservation_4.html#" title="">Change Room</a>
                                        </div>
                                        <div className="total total-3">
                                            TOTAL <span>$1000.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        // <div className="modal-overlay">
        //     <div className="container modal-content">

        //         <button className="modal-close" onClick={handleClose}>X</button>
        //         {children}

        //         <div className="row">
        //             <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        //                 <div className="sidebar" style={{marginRight:0, marginBottom:30}}>
        //                     <div className="reservation-room-selected ">
        //                         <h2 className="reservation-heading">Select Rooms</h2>
        //                         <div className="content-room ">
        //                             <div className="room">ROOM 1 <span>2 Adult, 1 Child</span></div>
        //                             <div className="room1">LUXURY ROOM <span>$500.00</span></div>
        //                             <a href="reservation_4.html#" title="">Change Room</a>
        //                         </div>
        //                         <div className="content-room border-top">
        //                             <div className="room">ROOM 2 <span>2 Adult, 1 Child</span></div>
        //                             <div className="room1">LUXURY ROOM <span>$500.00</span></div>
        //                             <a href="reservation_4.html#" title="">Change Room</a>
        //                         </div>
        //                         <div className="total total-3">
        //                             TOTAL <span>$1000.00</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Modal;
