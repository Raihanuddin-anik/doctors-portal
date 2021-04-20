import React from 'react';
import drCaudi from '../../../images/doctor.png'
import Doctors from '../Doctors/Doctors';
import {faPhone } from '@fortawesome/free-solid-svg-icons'
const Doctor = () => {
    const doctorData = [
        {   
            id:1,
            img: drCaudi,
            name: "dr.Caudi",
            mobile: "+00801531834607",
            icon: faPhone
        },
        { 
            id:2,
            img: drCaudi,
            name: "dr.Caudi",
            mobile: "+00801531834607",
            icon: faPhone
        },
        {
            id:3,
            img: drCaudi,
            name: "dr.Caudi",
            mobile: "+00801531834607",
            icon: faPhone
        }
    ]
    return (
        <div>
            <div>
                 <h2 className="text-center pt-5" style={{color: '#6acece'}}>Our Doctors</h2>
            </div>
            <div className="row">
                 {
            doctorData.map(data => <Doctors data ={data} key={data.id}></Doctors>)

                 }
            </div>
        </div>
    );
};

export default Doctor;