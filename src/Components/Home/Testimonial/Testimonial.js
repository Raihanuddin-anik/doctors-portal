import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
const Testimonial = () => {

    const testimonialData = [
        {   id: 1,
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Wilson Harry',
            from : 'California',
            img : wilson
        },
        {  
            id: 2,
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Ema Gomez',
            from : 'California',
            img : ema
        },
        {
            id: 3,
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'California',
            img : aliza
        }
    ]
    return (
        <div className="container ">

            <div className="pt-5">
                <h2 style={{ color: '#6acece' }}> Testimonial</h2>
                <h1>What's Our Patient <br /> Says</h1>
            </div>

            <div className="row container ">
            {
                   testimonialData.map(data =>  <Testimonials data={data} key={data.id}></Testimonials>)
                }
            </div>
        </div>
    );
};

export default Testimonial;