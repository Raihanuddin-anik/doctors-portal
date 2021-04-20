import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div style={{ height: "600px", backgroundColor: "#3d4558", background: 'cover' }} >
        <div style={{ marginTop: "30px" }}>
            <h2 className="text-center pt-5" style={{ color: "#5fc7c7" }} >Contact Us</h2>
            <h1 className="fs-1 text-white text-center mt-3">Always Contact Us</h1>
            <div className="inputs mt-5">
                <input className="mb-3 email-input" placeholder="Email Address*" />
                <br />
                <input className="subject-input mb-3" placeholder="Subject*" />
                <br />
                <input className="message-input mb-3"  placeholder="Your Message*" />
                <br />
                <button className="btn btn-info btn-lg">Submit</button>
            </div> 
        </div>
    </div>
    );
};

export default Contact;