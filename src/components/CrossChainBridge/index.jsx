import React from 'react';
import cl from './CrossChainBridge.module.sass'
import planet from '../../assets/planet.png'
import {CopyButton, Ethereum} from "../../assets/icons";
import iconForCopy from '../../assets/iconForCopy.png'

export const CrossChainBridge = () => {

    function copy() {
        navigator.clipboard.writeText('0x049E9f5369358786A1cE6483d668D062cfe547ec').then(() => {})
    }

    return (
        <section className={cl.cross} id={'cross'}>
            <div className={cl.titleBlock}>
                <span className={cl.title}>cross-chain bridge</span>
            </div>
            <div className={cl.mainContent}>
                <div className={cl.topText}>
                    <span className={cl.textLeft}>
                        The cross-chain bridge technology allows users to perform two-way conversion of
                        BRC-20 tokens between the Bitcoin blockchain
                        and the Ethereum Virtual Machine (EVM) network.
                        This means that users can safely and easily move their assets both ways, depending on their needs.
                    </span>
                    <span className={cl.textRight}>
                        SATURN's cross-chain bridge technology includes security mechanisms that protect assets during their transfer between blockchains.
                        This includes authorization and authentication tools that minimize the risks of fraud or error exclusion.
                    </span>
                </div>
                <div className={cl.bottomText}>
                    <span className={cl.textRight}>
                        The cross-chain bridge in SATURN aims to provide minimal time delays and low fees when transferring tokens between blockchains.
                        This encourages the active use of the protocol and meets the requirements of modern users in terms of transaction efficiency.
                        The SATURN project's cross-chain bridge technology opens new opportunities for users by providing
                        a tool for the free and secure movement of BRC-20 tokens between Bitcoin and Ethereum blockchains,
                        thereby facilitating the integration and joint interaction of different blockchain ecosystems.
                    </span>
                </div>
            </div>
            <img src={planet} className={cl.planet}/>
            <div className={cl.buttonCopy}>
                <div className={cl.trading} id={'textTrading'}>
                    <span className={cl.textTrading}>Trading on Uniswap</span>
                </div>
                <div className={cl.copyBlock}>
                    <span className={cl.text}>Contract</span>
                    <div className={cl.wrappBlock}>
                        <div className={cl.block}>
                            <Ethereum/>
                            <span className={cl.boldText}>0x3B...b07</span>
                        </div>
                        <div className={cl.block}>
                            <button onClick={copy}>
                                <CopyButton/>
                            </button>
                            <img src={iconForCopy} alt={'лого'}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

