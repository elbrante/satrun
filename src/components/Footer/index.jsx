import React from 'react';
import cl from './Footer.module.sass'
import {Mail, Saturn} from "../../assets/icons";

export const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.leftSide}>
                <Saturn/>
                <span className={cl.text}>© 2024 All rights reserved</span>
            </div>
            <div className={cl.rightSide}>
                <div className={cl.mail}>
                    <Mail/>
                    <span className={cl.text}>support@saturn.org</span>
                </div>
                <span className={cl.text}>Swap, bridge, leverage, and more all in one dynamic ecosystem</span>
            </div>
        </footer>
    );
};

