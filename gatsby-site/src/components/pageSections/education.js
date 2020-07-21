import React from 'react';
import Timeline from "../timeline";

const Education = () => {
    return (
        <>
            <div className="container is-blue-crayola-bg" style={{minHeight: '90vh', padding: '5%', margin: '0px'}}>
                <div className="row">
                <div className="col-xs-12">
                    <h1 className="is-white-text section-heading margin-3-b">Education</h1>
                </div>
                <Timeline />
            </div>
            </div>
        </>
    );
}

export default Education;