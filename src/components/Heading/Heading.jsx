import style from "./Heading.module.css"
import React from 'react';

const Heading=() =>{
    return (
    <>
        <div className={style.Heading}>
            <h1 align="center"  className={style.content}>
                 Digikull Students
            </h1>
            <br/>
        </div>
    </>
    )
}

export default Heading;