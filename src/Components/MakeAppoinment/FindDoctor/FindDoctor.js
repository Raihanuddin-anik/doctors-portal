import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const FindDoctor = ({onChange,date}) => {
    
    console.log(date.toDateString())
    
    return (
        <main style={{ height: "550px" }} className="container d-flex align-items-center">
          <div className="row">
          <div className="col-md-6">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
          </div>
         
        </main>
    );
};

export default FindDoctor;