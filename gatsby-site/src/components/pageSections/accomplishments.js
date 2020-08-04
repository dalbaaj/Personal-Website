import React from 'react';
import Accomplishments from '../../data/accomplishments.json';

const AccomplishmentSection = () => {
    return (
        <>
            <div className="container" style={{minHeight: '20vh', padding: '5%', margin: '0px'}}>
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="is-light-sky-blue-text section-heading margin-3-b">Accomplishments</h1>
                    </div>
                    {
                        Accomplishments.map((accomplishment) =>
                       <p className="ribbon"> {accomplishment.title} </p>
                        )

                    }
                </div>
            </div>
        </>
    );
}

export default AccomplishmentSection;