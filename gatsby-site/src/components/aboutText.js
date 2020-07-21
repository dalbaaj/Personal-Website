import React from "react";

const AboutText = ({content}) => {
    return (
        <div className="col-xs-12 content-card is-charcoal-bg" style={{marginBottom: '25px'}}>
            <p className="is-white-text">{content}</p>
        </div>
    );
}

export default AboutText;