import React from 'react';
import childPic from '../../../images/specialCare.png'

const SpecialCare = () => {
    return (
        <div className="row d-flex justify-content-center mt-5 pt-5">
            <div className="col-md-4">
                <img  class="img-fluid" src={childPic} alt="ChildPic" ></img>
            </div>
            <div className="col-md-6 pt-5 ms-5">
                <h3>Exceptional dental <br></br> Care On Your Turms</h3>
               <p className="mt-3">Lorem reprehenderit non amet sit reprehenderit nostrud veniam do quis tempor nisi cillum enim tempor.
                   Ullamco nisi culpa dolore tempor consectetur deserunt deserunt in in eu elit cupidatat.Consectetur est excepteur aliquip enim consectetur reprehenderit.
                   Ad fugiat dolor occaecat enim commodo elit ut.Commodo cupidatat deserunt velit ad laborum nostrud culpa adipisicing laboris mollit.
               </p>
               <button className="btn-primary">Learn more..</button>
            </div>
        </div>
    );
};

export default SpecialCare;