import React from 'react';
import Skills from '../../data/skills.json';

const SkillSection = () => {
    return (
        <div className="container is-usafa-blue-bg" style={{minHeight: '20vh', padding: '5%', margin: '0px'}}>
            <div className="row">
                <div className="col-xs-12">
                    <h1 className="is-white-text section-heading margin-3-b">Skills</h1>
                    <div>
                        {
                            Skills.map((skill) => 
                                (
                                    <a href={skill.link} className="skill-link">{skill.name}</a>
                                )
                            )
                        }
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default SkillSection;