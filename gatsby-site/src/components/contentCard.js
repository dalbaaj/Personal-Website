import React from 'react';


const ContentCard = ( {position, company, date, description} ) => {
    return (
        <>
            <h2 className="is-cultured-text">{position}</h2>
            <h3 className="is-cultured-text">{company}</h3>
            <h3 className="is-cultured-text">{date}</h3>
            <p className="is-cultured-text">{description}</p>
        </>
    );
}

export default ContentCard;