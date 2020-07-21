import React from 'react';
import MemeDanah from "../../images/danah-memoji.png";

const Landing = () => {
    return (
        <>
        <div className="sidebar-wrapper">
            <div className="text-align-center">
                <img 
                    src={MemeDanah} 
                    className="meme-danah"
                    style={{paddingTop: '25px', paddingBottom: '25px', height: '200px'}}
                />
                <h1 className="is-black-text" style={{paddingBottom:'25px'}}>Danah Albaaj.</h1>
            </div>
        </div>
        </>
    );
}

export default Landing;