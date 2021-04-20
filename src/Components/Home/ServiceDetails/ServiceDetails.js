import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4 d-flex justify-content-center ">
            <div className= 'me-3 mt-5 text-center'>
                <img src={service.img} alt="service"></img>
                <h6 style={{padding: '8px'}}>{service.name}</h6>
                <p> Consequat esse minim exercitation nisi quis laborum.Occaecat eu qui deserunt adipisicing quis occaecat laboris in.
                </p>
            </div>
        </div>
    );
};

export default ServiceDetails;