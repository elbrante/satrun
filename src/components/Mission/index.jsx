import React from 'react';
import cl from './Mission.module.sass'
import {Card} from "./Card";
import imgMission from '../../assets/imgForMission.png'
import {BigCard} from "./BigCard";

export const Mission = () => {
    return (
        <section className={cl.mission} id={'mission'}>
            <div className={cl.blockTitle}>
                <span className={cl.title}>MISSION</span>
            </div>
            <div className={cl.mainBlock}>
                <div className={cl.columnCards}>
                    <Card title={'Decentralization and Security'}
                          desc={'Creating a decentralized system where users have full control over their assets as they are transferred between blockchains'}
                    />
                    <Card title={'Ease of use and convenience'}
                          desc={'Ease of use is a key element of the project mission'}
                    />
                </div>

                <div className={cl.wrapperBigCard}>

                    <BigCard title={'Ensuring Interoperability'}
                             desc={'SATURN enables users to use BRC-20 tokens on Ethereum and vice versa, providing a high level of interoperability between these ecosystems'}

                    />
                </div>

                <div className={cl.changeBigCard}>
                    <Card title={'Ensuring Interoperability'}
                          desc={'SATURN enables users to use BRC-20 tokens on Ethereum and vice versa, providing a high level of interoperability between these ecosystems'}
                    />
                </div>


                <div className={cl.columnCards}>
                    <Card title={'Empowering DApps'}
                          desc={'Support the development of decentralized applications by enabling them to use BRC-20 and ERC-20 tokens in their operations'}
                    />
                    <Card title={' Progress'}
                          desc={'The project implements cross-chain bridge and smart contract technology to provide a high level of efficiency and automation of operations'}
                    />
                </div>
                <img src={imgMission} className={cl.imgMission}/>
            </div>
        </section>
    );
};

