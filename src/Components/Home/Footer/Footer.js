import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container pt-5">

            <div className="row">
                <div className="col-md-3 mt-5 pt-3">
                    <ul>
                        <li>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatment of Personal Disease </li>
                        <li>Tooth Extraction</li>
                        <li>Check Up</li>

                    </ul>
                </div>
                <div className="col-md-3">
                <h3 className="mb-4" style={{ color: "#5fc7c7" }}>Services</h3>
                    <ul>
                    <li>Emergency Dental Care</li>
                        <li>Check Up</li>
                        <li>Treatment of Personal Disease </li>
                        <li>Tooth Extraction</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                     
                    </ul>
                </div>
                <div className="col-md-3">
                <h3 className="mb-4" style={{ color: "#5fc7c7" }}>Oral Health</h3>
                    <ul>
                    <li>Check Up</li>
                        <li>Treatment of Personal Disease </li>
                        <li>Tooth Extraction</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                        <li>Check Up</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="mb-4" style={{ color: "#5fc7c7" }}>Our Address</h3>
                    <ul>
                        <li>riahan</li>
                    </ul>
                </div>
             
            </div>
        </div>
    );
};

export default Footer;