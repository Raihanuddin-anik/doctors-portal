import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import SpecialCare from '../SpecialCare/SpecialCare';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <SpecialCare></SpecialCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
