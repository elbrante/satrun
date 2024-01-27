import React from 'react';
import cl from './About.module.sass'
import {Saturn} from "../../assets/icons";

export const About = () => {
    return (
        <section className={cl.about} id={'about'}>
            <span className={cl.title}>ABOUT</span>

            <div className={cl.blockText}>
                <span className={cl.text}>
                    Project SATURN is an innovative protocol designed to efficiently transfer BRC-20 tokens between the Bitcoin blockchain and the
                    Ethereum Virtual Machine (EVM). This protocol provides a bridge between two different blockchains,
                    allowing users to easily and securely move their assets between the networks.
                </span>
                <span className={cl.text}>
                    SATURN utilizes advanced technologies and smart contracts on the Ethereum platform to create a bridge
                    between the two blockchains, enabling secure and automated conversion of BRC-20 tokens to ERC-20
                    and vice versa. This process is carried out with minimal cost and maximum security, making SATURN a
                    convenient and reliable tool for users wishing to move their tokens between Bitcoin and Ethereum blockchains.
                </span>
            </div>
        </section>
    );
};

