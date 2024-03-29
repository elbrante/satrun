import React from 'react';
import cl from './Footer.module.sass'
import {Mail, Saturn, Share} from "../../assets/icons";

export const Footer = () => {
    return (
        <footer className={cl.footer} id={'contact'}>
            <div className={cl.wrapper}>
                <div className={cl.leftSide}>
                    <Saturn/>
                    <span className={cl.textLeft}>© 2024 All rights reserved</span>
                </div>
                <div className={cl.rightSide}>
                    <div className={cl.share}>
                        <Share/>
                        <span className={cl.text}>share</span>
                    </div>
                    <div className={cl.mail}>
                        <Mail/>
                        <span className={cl.text}>support@saturn.org</span>
                    </div>
                    <span className={cl.textRight}>Swap, bridge, leverage, and more all in one dynamic ecosystem</span>
                </div>
            </div>

        </footer>
    );
};

