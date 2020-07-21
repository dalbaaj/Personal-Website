import React from "react";

const ExperienceEvent = ( {position, company, date, description} ) => {
    return (
        <div className="col-xs-12 content-card is-independence-grey-bg" style={{marginBottom: '25px'}}>
            <h2 className="is-white-text">{position}</h2>
            <h3 className="is-white-text">{company}</h3>
            <h3 className="is-white-text">{date}</h3>
            <p className="is-white-text">{description}</p>
        </div>
    );
}

export default ExperienceEvent;