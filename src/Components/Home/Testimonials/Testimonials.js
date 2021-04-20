import React from 'react';

const Testimonials = ({ data }) => {
    return (
        <div class="card col-md-4">
                <div class="card-body">
                    <p class="card-text">{data.quote}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="me-3" >
                         <img src={data.img} alt="img" className="img-fluid"/>
                    </div>
                    <div>
                         <h6>{data.name}</h6>
                         <p>{data.from}</p>
                    </div>
                </div>
           </div>
    );
};

export default Testimonials;