import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container is-vivid-violet-bg" style={{minHeight: '90vh', padding: '5%', margin: '0px'}}>
            {children}
        </div>
        </>
    );
};

export default PageSection;