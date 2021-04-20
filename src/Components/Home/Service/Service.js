import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import fluoride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/tooth.png'
const Service = () => {

    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    
    return (
        <section className="container mt-5">
        
           <div className='text-center'>
               <h2 style={{color: '#5fc7c7', }}>Our Services</h2>
                <h1 className="mt-3"> Services We Provide</h1>
           </div>
          
              <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
              </div>
     
        </section>
    );
};

export default Service;