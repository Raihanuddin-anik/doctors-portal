import React, { useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import AppointmentFooter from '../AppointmentFooter/AppointmentFooter';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import FindDoctor from '../FindDoctor/FindDoctor';

const MakeAppointment = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <FindDoctor date={value} onChange={onChange}></FindDoctor>
            <h2 style={{color:'#1cc7c1'}} className="text-center">Available Appointment on {value.toDateString()}</h2>
            <AppointmentCard date={value}></AppointmentCard>
            <AppointmentFooter></AppointmentFooter>
        </div>
    );
};

export default MakeAppointment;