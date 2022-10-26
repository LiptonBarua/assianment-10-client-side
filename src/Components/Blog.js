import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>1: what is cors</h1>
            <p><span>Ans:</span> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>

            <h2 className='text-justify'>2: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><span>Ans 1: </span> Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
            <p><span>Ans 2: </span>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints</p>
        </div>
    );
};

export default Blog;