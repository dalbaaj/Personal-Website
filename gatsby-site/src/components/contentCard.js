import React from 'react';


const ContentCard = ( {position, company, date, description} ) => {
    return (
        <>
            <h2 className="is-white-text">{position}</h2>
            <h3 className="is-white-text">{company}</h3>
            <h3 className="is-white-text">{date}</h3>
            <p className="is-white-text">{description}</p>
        </>
    );
}

export default ContentCard;