import React from "react";

const EducationEvent = ( {school, qualification, date, description} ) => {
    return (
        <div className="col-xs-12 content-card is-pumpkin-bg" style={{marginBottom: '25px'}}>
            <h2 className="is-white-text">{school}</h2>
            <h3 className="is-white-text">{qualification}</h3>
            <h3 className="is-white-text">{date}</h3>
            <p className="is-white-text">{description}</p>
        </div>
    );
}

export default EducationEvent;