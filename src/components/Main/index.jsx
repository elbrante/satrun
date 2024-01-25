import React from 'react';
import cl from './Main.module.sass'
import {ChatIcon, MediumIcon, NavButton, Saturn, TelegramIcon, TwitterIcon} from "../../assets/icons";

export const Main = () => {
    return (
        <main className={cl.main}>
            <header className={cl.header}>
                <div className={cl.rightSide}>
                    <div className={cl.icons}>
                        <MediumIcon/>
                        <TwitterIcon/>
                        <ChatIcon/>
                        <TelegramIcon/>
                    </div>
                    <nav>
                        <NavButton/>
                    </nav>
                </div>
            </header>
            <section className={cl.sectionBlock}>
                <div className={cl.wrapper}>
                    <Saturn/>
                    <span className={cl.underTitleText}>
                        CA: 0x049E9f5369358786A1cE6483d668D062cfe547ec
                    </span>
                    <span className={cl.bottomText}>
                        Protocol for transferring BRC-20 tokens from the Bitcoin blockchain to the Ethereum Virtual Machine (EVM) Networks
                    </span>
                </div>
            </section>
        </main>
    );
};

