import React from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Cards = ({APdata,date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4">
           <div class="card text-center mt-3" style={{width: '18rem'}}>
                <div class="card-body">
                    <h4 class="card-title">{APdata.subject}</h4>
                    <p class="card-subtitle mb-2 text-muted">{APdata.visitingHour}</p>
                    <h6 class="card-text">{APdata.totalSpace} SPACES AVAILABLE</h6>
                    <button onClick={openModal} className="btn-info">BOOK APPOINTMENT</button>
                    <AppointmentModal modalIsOpen={modalIsOpen} date={date}  subject={APdata.subject} closeModal={closeModal}></AppointmentModal>
                </div>
                </div>
        </div>
    );
};

export default Cards;