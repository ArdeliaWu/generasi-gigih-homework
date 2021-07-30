import React from 'react';
import Constraint from './const';

const 

const Authentication = () => {
    render(){
        const btnstyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        const handleClick = async () => {
            const goto = await fetch(`https://accounts.spotify.com/authorize`);
        }
    }
    return (
        <div>
            <button className="link" style={btnstyle} onClick="">Link</button>
        </div>
    );
}

