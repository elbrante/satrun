import React from 'react';
import cl from './BigCard.module.sass'
import {BorderBigCard, BorderCard} from "../../../assets/icons";
import imgForCard from "../../../assets/imgForCard.png";
export const BigCard = ({title, desc}) => {
    return (
        <div className={cl.wrapper}>
            <BorderBigCard/>
            <img src={imgForCard} className={cl.imgCard}/>
            <div className={cl.blockText}>
                <span className={cl.title}>
                    {title}
                </span>
                <span className={cl.desc}>
                    {desc}
                </span>
            </div>
        </div>
    );
};

