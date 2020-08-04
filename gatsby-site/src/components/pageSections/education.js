import React from 'react';
import TimelineComponent from '../timeline';

const Education = () => {
    return (
        <>
            <div className="container" style={{minHeight: '90vh', padding: '5%', margin: '0px'}}>
                <div className="row">
                <div className="col-xs-12">
                    <h1 className="is-med-turquoise-text section-heading margin-3-b">Education</h1>
                </div>
                <TimelineComponent />
            </div>
            </div>
        </>
    );
}

export default Education;