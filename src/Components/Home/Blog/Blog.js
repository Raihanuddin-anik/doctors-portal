import React from 'react';
import wilson from '../../../images/wilson.png'
import BlogPost from '../BlogPost/BlogPost';
const Blog = () => {

    const blogData = [
        {
            title: 'Check at least a doctor in a year for your teeth',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'Two time brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Sinthia',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'The tooth cancer is taking a challenge',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
    ]

    return (
        <div className="mt-5 pt-5">
            <div className="text-center mb-5 pb-5">
                <h4 style={{color: '#6acece'}}>Our Blog</h4>
                <h1>From Our Blog News</h1>
            </div> 
            <div className=" container">
                <div  className="row ">
                    {
                        blogData.map(data => <BlogPost data={data}></BlogPost>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;