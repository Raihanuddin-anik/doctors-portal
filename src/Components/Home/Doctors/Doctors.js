import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctors = ({data}) => {
    return (
        <div className="col-md-4">
            <img src={data.img} alt="datapic"  />
           
            <h5 className="text-center">{data.name}</h5>


            <p  className="text-center"> <FontAwesomeIcon className="me-2" style={{color: '#6acece'}} icon={data.icon}></FontAwesomeIcon>{data.mobile}</p>
        </div>
    );
};

export default Doctors;