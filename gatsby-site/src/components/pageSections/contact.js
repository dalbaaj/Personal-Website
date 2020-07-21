import React from 'react';
import ContactContent from "../contactContent";

const Contact = () => {
    return (
        <>
            <div className="container is-dark-oxford-blue-bg" style={{minHeight: '20vh', padding: '5%', margin: '0px'}}>
                <div className="row">
                <div className="col-xs-12">
                    <h1 className="is-white-text section-heading margin-3-b">Contact</h1>
                </div>
                <div className="content-card is-manatee-bg">
                    <p className="is-white-text">
                    This is my first attempt at ever making a website so please don't judge me. If you would like to know more about me or anything I've worked on you can contact me at
                    dana dot al dot baaj [at] gmail dot com.
                    Please note the above format is to prevent any web scraping or spam. 
                    </p>
                </div>    
            </div>
            </div>
        </>
    );
}

export default Contact;