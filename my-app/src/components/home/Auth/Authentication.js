import React, { useState } from 'react';
import * as Constant from '../Constant/constant.js';



const Authentication = () => {
    const [auth, setAuth] = useState(" ");
    const btnstyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    const handleClick = async () => {
        const getdata = await fetch(`https://accounts.spotify.com/authorize?client_id=${Constant.CLIENT_ID}&reidrect_uri=${Constant.REDIRECT_URL_AFTER_LOGIN}&scope=${Constant.SCOPE}&response_type=token`);
        const result = await getdata.json();
        //console.log(result);
        setAuth(result.data);
    }

    return (
        <div>
            <button className="link" style={btnstyle} onClick={handleClick}>Link</button>
        </div>
    );
}

export default Authentication;
