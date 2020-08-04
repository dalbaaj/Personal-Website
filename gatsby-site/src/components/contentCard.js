import React from 'react';


const ContentCard = ( {position, company, date, description} ) => {
    return (
        <>
            <h2 className="is-gunmetal-text">{position}</h2>
            <h3 className="is-gunmetal-text">{company}</h3>
            <h3 className="is-gunmetal-text">{date}</h3>
            <p className="is-gunmetal-text">{description}</p>
        </>
    );
}

export default ContentCard;