import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
import './HeaderMain.css'



const HeaderMain = () => {
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new smile <br /> starts here</h1>
                <p> he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid hre
                </p>
               <Link to="/appointment"> <button className="btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;