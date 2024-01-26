import React from 'react';
import cl from './Roadmap.module.sass'
import star1 from '../../assets/star1.png'
import star2 from '../../assets/star2.png'
import star3 from '../../assets/star3.png'

export const Roadmap = () => {
    return (
        <section className={cl.roadmap}>
            <div className={cl.titleBlock}>
                <span className={cl.title}>ROADMAP</span>
            </div>
            <div className={cl.mainBlock}>
                <div className={cl.stages}>
                    <span className={cl.text}>
                        stage 1
                        q3 2023
                    </span>
                    <span className={cl.text}>
                        stage 2
                        q3 2023
                    </span>
                </div>
                <div className={cl.blockWithBorder}>
                    <div className={cl.stages}>
                        <span className={cl.descLeft}>
                            Initiation of platform development
                            Integration of EVM smart contract
                        </span>
                        <span className={cl.descRight}>
                            Beta testing and user feedback
                            Optimization and refinement
                            Launch preparation
                        </span>
                    </div>

                    <div className={cl.stages}>
                        <span className={cl.descLeft}>
                            stage 3
                            q1 2024
                        </span>
                        <span className={cl.descRight}>
                            stage 4
                            q1 2024
                        </span>
                    </div>
                </div>

                <div className={cl.bottomBlockWithBorder}>
                    <div className={cl.stages}>
                        <span className={cl.descLeft}>
                            CEX Token listing
                            Cross-chain bridge expansion
                        </span>
                        <span className={cl.descRight}>
                            Testing and optimization
                            Leverage trading launch preparation
                            DEX Token integration
                        </span>
                    </div>

                    <div className={cl.stages}>
                        <span className={cl.text}>
                            stage 5
                            q1 2024
                        </span>
                        <span className={cl.text}>
                            stage 6
                            q2 2024
                        </span>
                    </div>
                </div>

                <div className={cl.stages}>
                    <span className={cl.descLeft}>
                        Advance trading features
                    </span>
                    <span className={cl.descRight}>
                        Community development
                    </span>
                </div>

                <img src={star1} className={cl.star1}/>
                <img src={star2} className={cl.star2}/>
                <img src={star3} className={cl.star3}/>
            </div>
        </section>
    );
};

