import React from 'react';
import cl from './Card.module.sass'
import {BorderCard} from "../../../assets/icons";
import imgForCard from '../../../assets/imgForCard.png'

export const Card = ({title, desc}) => {
    return (
        <div className={cl.wrapper}>
           <BorderCard/>
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

