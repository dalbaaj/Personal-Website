import React from "react";

const ContactContent = ({content}) => {
    return (
        <div className="col-xs-12 content-card is-pumpkin-bg" style={{marginBottom: '25px'}}>
            <p className="is-white-text">{content}</p>
        </div>
    );
}

export default ContactContent;