import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor1.png'

const Appointment = () => {
    return (
        <div className="first-div p-4">
            <div  className="ap-div ">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-4 ">
                        <img src={doctor} alt="doctor" className="doctor-img"></img>
                    </div>
                    <div className="col-md-6 pt-5 text-white" >
                         <h3 style={{color: '#6acece'}}>APPOINTMENT</h3>
                          <p className='fs-1'>Make an Appointment <br></br> Today</p>
                          <button className="btn-primary">Learm more..</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;