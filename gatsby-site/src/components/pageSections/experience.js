import React from 'react';
import ContentCard from '../contentCard';


const Experience = () => {
    return (
        <>
            <div className="container" style={{minHeight: '90vh', padding: '5%', margin: '0px'}}>
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="is-violet-web-text section-heading margin-3-b">Experience</h1>
                    </div>
                    <div className ="col-xs-12 content-card is-davys-grey-bg" style={{marginBottom: '25px'}}>
                        <ContentCard
                            position = "Events Director Student Assistant"
                            company="UCLA Luskin School of Public Affairs"
                            date="November 2017-Present" 
                            description="Various duties include but are not limited to:
                            Organize and maintain weekly updates to monthly and annual event calendars for all departments.
                            Adapt to new event projects quickly to complete them in a timely manner.
                            Contact businesses, local organizations, student communities and vendors regarding donations, event promotion and quotes for events with 50-900 attendees.
                            Lead development and design of website for annual summit with 800 attendees." 
                        />
                    </div>
                    <div className ="col-xs-12 content-card is-davys-grey-bg" style={{marginBottom: '25px'}}>
                        <ContentCard
                            position="Reader for Life Sciences Core Education" 
                            company="University of California, Los Angeles" 
                            date="April 2019-June 2019"
                            description="Various duties included but were not limited to:
                            Providing feedback on student homework assignments for a coding based statistical course in the Life Science Department. 
                            Preparing weekly summaries regarding common errors and gaps in understanding on student homework assignments for course teaching assistants 
                            Coordinating with faculty members on ways to improve homework assignments for student learning
                            Maintaining an updated spreadsheet of grades for multiple teaching assistants" 
                        />
                    </div> 
                    <div className ="col-xs-12 content-card is-davys-grey-bg" style={{marginBottom: '25px'}}>    
                        <ContentCard
                            position="Lead Banquet Server"
                            company="Alerus Center (Grand Forks, North Dakota)"
                            date="April 2015-January 2019"
                            description="Various duties included but were not limited to:
                            Assisting co-workers with coordination of events such as weddings and formal business meetings
                            Collaborating with other departments to ensure customer satisfaction regarding food, decorations, set-up, and service
                            Setting up, arranging, preparing, and removing tables, chairs, staging, and other requested items accorded to provided schematics for ballrooms/meeting rooms" 
                                
                        />
                    </div>    
                </div>
            </div>
        </>
    );
}

export default Experience;