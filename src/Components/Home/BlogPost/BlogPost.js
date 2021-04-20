import React from 'react';

const BlogPost = ({ data }) => {
    return (
        <div class="card me-3 col-md-4" style={{width:"30%"}}>
            <div className="d-flex justify-content-center">
                <div className="me-3" >
                    <img src={data.authorImg} alt="authorImg" className="img-fluid" />
                </div>
                <div>
                    <h6>{data.author}</h6>
                    <p>{data.date}</p>
                </div>
            </div>
            <div class="card-body">
                <h4 class="card-text">{data.title}</h4>
                <p calss="card-text">{data.description}</p>
            </div>

        </div>
    );
};

export default BlogPost;