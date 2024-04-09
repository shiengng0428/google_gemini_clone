import React from 'react';
import './main.css';
import { assets } from '../../assets/assets'

const main = () => {
    return (
        <div>
            <dic className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.profile} alt="" />
                </div>
            </dic>
        </div>
    );
}

export default main;
