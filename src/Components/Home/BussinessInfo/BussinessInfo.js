import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const BussinessInfo = () => {

    const InfoData = [
        {
            key :"1",
            title: "Opening Hours",
            description: " We are open 7 day",
            icon: faClock,
            background: "primary"
        },
        {   
            key:"2",
            title: "Visit Our Location",
            description: " Green Road, Dhanmondi, Dhaka",
            icon: faMapMarker,
            background: "dark"
        },
        { 
            key:"3",
            title: "Contact Us",
            description: " +01531834607",
            icon: faPhone,
            background: "primary"
        }
    ]
    return (
        <section className="container" >
         <div className="row">
         {
               InfoData.map(info => <InfoCard info ={info} key={info.key}></InfoCard>)
           }
         </div>
        </section>
    );
};

export default BussinessInfo;