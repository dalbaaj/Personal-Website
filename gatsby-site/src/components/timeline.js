import React from "react";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

const TimelineComponent = () => {
    return (
        <>
        <Timeline lineColor={'#fff'}>
            <TimelineItem
                key="001"
                dateText="2017-2021 (Expected)"
                dateInnerStyle={{ background: '#3A3A3A', color: '#F5F3F5'}}
                dateStyle={{ background: 'transparent'}}
                bodyContainerStyle={{
                    background: '#3A3A3A',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                    <h2 className = 'is-med-turquoise-text'>University of California, Los Angeles </h2>
                    <h3 className="is-med-turquoise-text">Computational and Systems Biology B.S.</h3>
                    <p className="is-cultured-text">
                        Relevant courses I have taken are the following: 
                        <br/>
                        Introduction to Programming (C++), 
                        Statistics of Biological Systems (Python), 
                        Thesis Research Opportunities in Computational and Systems Biology (Python and R), 
                        Biological Modeling: Mathematical and Computational Approaches (MATLAB).
                    </p>
                </TimelineItem>
            <TimelineItem
                key="002"
                dateText="June - August 2019"
                dateInnerStyle={{ background: '#3A3A3A', color: '#F5F3F5'}}
                dateStyle={{ background: 'transparent'}}
                bodyContainerStyle={{
                    background: '#3A3A3A',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h2 className="is-med-turquoise-text">University of Sussex</h2>
                <h3 className="is-med-turquoise-text">Intensive Summer Abroad</h3>
                <p className="is-cultured-text">
                Completed a year of physics over 2 months as part of the University of California Education Abroad Program.
                </p>
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="2015 - 2017"
                dateInnerStyle={{ background: '#3A3A3A', color: '#F5F3F5'}}
                dateStyle={{ background: 'transparent'}}
                bodyContainerStyle={{
                    background: '#3A3A3A',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h2 className="is-med-turquoise-text">Northland Community and Technical College</h2>
                <h3 className="is-med-turquoise-text">Concurred Enrollment</h3>
                <p className="is-cultured-text">
                I took various courses as part of my progress for my high school diploma.
                </p>
            </TimelineItem>
            <TimelineItem
                key="004"
                dateText="2015 - 2017"
                dateInnerStyle={{ background: '#3A3A3A', color: '#F5F3F5'}}
                dateStyle={{ background: 'transparent'}}
                bodyContainerStyle={{
                    background: '#3A3A3A',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h2 className="is-med-turquoise-text">University of Minnesota, Crookston</h2>
                <h3 className="is-med-turquoise-text">Concurred Enrollment</h3>
                <p className="is-cultured-text">
                I took various courses in Math and English as part of my progress for my high school diploma. 
                </p>
            </TimelineItem>
            <TimelineItem
                key="005"
                dateText="2013 - 2017"
                dateInnerStyle={{ background: '#3A3A3A', color: '#F5F3F5'}}
                dateStyle={{ background: 'transparent'}}
                bodyContainerStyle={{
                    background: '#3A3A3A',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h2 className="is-med-turquoise-text">East Grand Forks Senior High School</h2>
                <h3 className="is-med-turquoise-text">High School Diploma</h3>
                <p className="is-cultured-text">
                GPA: 3.98
                <br/><br/>
                Activities: 
                <br/>
                Speech - Captain (2016, 2017), National Speech and Debate Association, Musical Theater, One Act Competitive Play, and National Honor Society. 
                </p>
            </TimelineItem>
        </Timeline>
        </>
    )
}

export default TimelineComponent;
