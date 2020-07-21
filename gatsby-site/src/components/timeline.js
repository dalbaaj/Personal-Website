import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"  
                contentStyle={{ background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '10px solid  #FE7F2D' }}
                date="2017-2021" 
                iconStyle={{ background: '#FE7F2D', color: '#fff'}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">University of California, Los Angeles </h3>
                <h4 className="vertical-timeline-element-subtitle">Computational and Systems Biology B.S.</h4>
                <p>
                    Relevant courses I have taken are the following: 
                    <br/>
                    Introduction to Programming (C++), 
                    Statistics of Biological Systems (Python), 
                    Thesis Research Opportunities in Computational and Systems Biology (Python and R), 
                    Biological Modeling: Mathematical and Computational Approaches (MATLAB).
                    
                    <br/> <br/>
                    My extracurriculars include Alpha Chi Omega, Bruin Partners, and the Undergraduate Learning Assistant Program.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '10px solid  #FE7F2D' }}
                date="June - August 2019"
                iconStyle={{ background: '#FE7F2D', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">University of Sussex</h3>
                <h4 className="vertical-timeline-element-subtitle">Intensive Summer Abroad</h4>
                <p>
                Completed a year of physics over 2 months as part of the University of California Education Abroad Program.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '10px solid  #FE7F2D' }}
                date="2015 - 2017"
                iconStyle={{ background: '#FE7F2D', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Northland Community and Technical College</h3>
                <h4 className="vertical-timeline-element-subtitle">Concurred Enrollment</h4>
                <p>
                I took various courses as part of my progress for my high school diploma.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '10px solid  #FE7F2D' }}
                date="2015 - 2017"
                iconStyle={{ background: '#FE7F2D', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">University of Minnesota, Crookston</h3>
                <h4 className="vertical-timeline-element-subtitle">Concurred Enrollment</h4>
                <p>
                I took various courses in Math and English as part of my progress for my high school diploma. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#fff', color: '#000', border:'1 px solid #001233' }}
                contentArrowStyle={{ borderRight: '10px solid  #FE7F2D' }}
                date="2013-2017"
                iconStyle={{ background: '#FE7F2D', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">East Grand Forks Senior High School</h3>
                <h4 className="vertical-timeline-element-subtitle">High School Diploma</h4>
                <p>
                GPA: 3.98
                <br/><br/>
                Activities: 
                <br/>
                Speech - Captain (2016, 2017), National Speech and Debate Association, Musical Theater, One Act Competitive Play, and National Honor Society. 
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    )
}

export default Timeline;
