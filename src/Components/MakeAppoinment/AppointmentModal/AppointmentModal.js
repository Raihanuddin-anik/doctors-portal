import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
const AppointmentModal = ({ modalIsOpen, closeModal, subject, date }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {

    data.subject = subject;
    data.date = date;
    fetch("http://localhost:4001/addProduct", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json()
        .then(result => {
          if(result){
            closeModal();
            alert('Appointment created successfully.');
        }
        }))
  }

  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="btn-info" onClick={closeModal}>close</button>
        <p className="text-center">{date.toDateString()}</p>
        <h2 className="text-center">{subject}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group p-2">
            <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
            {errors.name && <span className="text-danger">This field is required</span>}

          </div>

          <div className="form-group p-2">
            <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group p-2">
            <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group row p-2">
            <div className="col-4">

              <select className="form-control" name="gender" {...register("gender", { required: true })} >
                <option disabled={true} value="Not set">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && <span className="text-danger">This field is required</span>}

            </div>
            <div className="col-4 p-2">
              <input {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
              {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4 p-2">
              <input {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
              {errors.weight && <span className="text-danger">This field is required</span>}
            </div>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn-info"> submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;