import React from 'react';
import '../css/as-seen-on.css';

import TiktokLarge from '../media/tiktok-large.webp';
import InstagramLarge from '../media/instagram-large.webp';
import FacebookLarge from '../media/facebook-large.webp';

import { socials } from '../utils/socials';

const AsSeenOn = () => {
    return (
        <div className="seen-on">
            <div className="seen-on-inner">
                <h2>As seen on...</h2>
                <a href={socials.instagram}>
                    <img alt="Instagram" src={InstagramLarge} style={{ marginTop: "5px" }} draggable="false" />
                </a>
                <a href={socials.tiktok}>
                    <img alt="TikTok" src={TiktokLarge} style={{ marginBottom: "5px", height: "45px" }} draggable="false" />
                </a>
                <a href={socials.facebook}>
                    <img alt="Facebook" src={FacebookLarge} draggable="false" />
                </a>
            </div>
        </div>
    );
};

export default AsSeenOn;
