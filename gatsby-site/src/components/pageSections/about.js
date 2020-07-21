import React from 'react';
import AboutText from "../aboutText";

const About = () => {
    return (
        <>
        <div className="container is-light-blue-bg" style={{minHeight: '60vh', padding: '5%', margin: '0px'}}>
            <div className="row">
                <div className="col-xs-12">
                    <h1 className="is-white-text section-heading margin-3-b">About</h1>
                </div>
                <div className="is-independence-grey-bg content-card">
                    <p className="is-white-text">
                        I'm currently entering my final year of study in Computational and Systems Biology with a customized concentration in Mathematical Biology at University of California, Los Angeles. <br/><br/>  
                        I am fascinated with employing mathematical models and computational analysis to understand the complex dynamics and interaction networks of biological processes. Additionally, I am intrigued by how increased access to biological data will shape the future scientific landscape. I have a deep appreciation for the role teaching and mentorship has played throughout my life, so much of my passion projects center around these themes. 
                        I plan to continue similar mentorship work beyond my undergraduate years. <br/><br/>
                        When I'm not working at my computer, you can find me at concerts, teaching, or traveling to visit family and friends.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;