import React from 'react';
import ContentCard from '../contentCard';

const Volunteering = () => {
    return (
        <>
        <div className="container" style={{minHeight: '90vh', padding: '5%', margin: '0px'}}>
            <div className="row">
                <div className="col-xs-12">
                    <h1 className="is-med-turquoise-text section-heading margin-3-b">Volunteering</h1>
                </div>
                <div className ="col-xs-12 content-card is-davys-grey-bg" style={{marginBottom: '25px'}}> 
                    <ContentCard
                        position="Mentorship Programming Director"
                        company="Bruin Partners" 
                        date="September 2018-Present"
                        description="I have been a mentor within this organization since September 2018, and maintained a leadership position within the organization since January 2019. 
                        Currently, my responsibilities within the organization include but are not limited to: 
                        Assigning weekly tasks to committee members;
                        Coordinating with local businesses for fundraisers and utilize other student organizations to assist with promotion;
                        Developing and organizing a quarterly social calendar with events, fundraisers, and weekend retreats within budget;
                        Curating a catalog of team building activities, fundraisers, and social events for future use;
                        Facilitating a community that fosters teamwork and a positive culture;
                        Arranging all necessary transportation and supplies for members attending events;
                        Adapting events based on member feedback;
                        Ensuring organization's ability to achieve $6,000 annual fundraising goal."       
                    />
                </div>
                <div className ="col-xs-12 content-card is-davys-grey-bg" style={{marginBottom: '25px'}}>     
                    <ContentCard
                        position="Undergraduate Learning Assistant"
                        company="Undergraduate Learning Assistant Program"
                        date="September 2018-December 2019"
                        description="Various duties included but were not limited to:
                        Helping facilitate discussions with the increased implementation of core program strategies to enhance student understanding of material;
                        Using weekly written reflections and attendance of content meetings to develop new views on teaching and learning; 
                        Experimenting with a variety of techniques for helping students learn in collaborative environments, and revising these strategies based on feedback or personal observations;
                        Communicating information from student interactions to the instructors on improving course education"      
                    />
                </div>
                <div className ="col-xs-12 content-card is-davys-grey-bg" style={{marginBottom: '25px'}}> 
                    <ContentCard
                        position="Vice President of Facility Operations"
                        company="Alpha Chi Omega, Alpha Psi Chapter"
                        date=" December 2019-June 2019"
                        description="Various duties included but were not limited to:
                            Coordinating with advisors and Local Housing Corporation, as well as chapter executive board for general improvements, renovations, and maintenance of the facility; 
                            Agreeing and reviewing all contracts for rental usage of the facility during the academic year;
                            Acting as point of contact between the House Director, Local Housing Corporation, and tenants;
                            Managing and supervising daily operations as well as weekly cleaning duties and emergencies." 
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Volunteering;