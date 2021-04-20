import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 each-info">
            <div class={`d-flex justify-content-center text-white d-flex align-items-center info-card info-${info.background}`}>
                <div className='me-3 fs-2'>
                     <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h5 class="card-title">{info.title}</h5>
                    <p class="card-text">{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;