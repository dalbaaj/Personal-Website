import React from "react";

const VolunteerEvent = ( {position, organization, date, description} ) => {
    return (
        <div className="col-xs-12 content-card is-black-coral-bg" style={{marginBottom: '25px'}}>
            <h2 className="is-white-text">{position}</h2>
            <h3 className="is-white-text">{organization}</h3>
            <h3 className="is-white-text">{date}</h3>
            <p className="is-white-text">{description}</p>
        </div>
    );
}

export default VolunteerEvent;