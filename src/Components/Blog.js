import React from 'react';

const Blog = () => {
    return (
        <div className='bg-primary my-5 p-5 rounded-5'>
            <h1>1: what is cors</h1>
            <p className='text-justify'><span className='bg-danger text-white me-1 px-1'>Ans:</span> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>

            <h2 className='text-justify'>2: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='text-justify'><span className='bg-danger text-white me-1 px-1'>Ans 1: </span> Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
            <p className='text-justify'><span className='bg-danger text-white me-1 px-1'>Ans 2: </span>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints</p>

            <h1>3: How does the private route work?</h1>
            <p className='text-justify'><span className='bg-danger text-white me-1 px-1'>Ans: </span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
            <h1>4: What is Node? How does Node work?</h1>
            <p className='text-justify'><span className='bg-danger text-white me-1 px-1'>Ans 1:</span>Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.</p>

            <p className='text-justify'><span className='bg-danger text-white me-1 px-1'>Ans 2:</span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;