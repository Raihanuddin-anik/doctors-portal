import React, { useState, useEffect } from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    const [seclectedDate, setSeclectedDate] = React.useState(new Date());
  console.log(seclectedDate.toDateString())
    const [ApData, setApData] = React.useState([]);
    console.log(ApData)

    
    const handleDateChange = date => {
        setSeclectedDate(date)
      
        fetch("http://localhost:4001/appointmentsByDate", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date})
          })
          .then(res => res.json())
          .then(data => setApData(data))
          
             
    }

    // const [Appointments, setAppoitments] = useState([]);
    // console.log(Appointments)
    // useEffect(() => {
    //     fetch("http://localhost:4001/appointments")
    //         .then(res => res.json()
    //             .then(result => {
    //                 setAppoitments(result)
    //             }))
    // }, [Appointments._id])

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 ps-5 mt-5">
                <h2>{seclectedDate.toDateString()}</h2>
                <Calendar

                    className="pt-5 pb-3 p-3 w-100 h-100"
                    onChange={handleDateChange}
                    seclectedDate={seclectedDate}
                />
            </div>
            <div className="col-md-5">


                <AppointmentList ></AppointmentList>

            </div>
        </div>
    );
};

export default DashBoard;