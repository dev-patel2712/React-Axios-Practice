import style from "./Output.module.css"
import React from 'react';

const Output= ({res})=>{
    return (
        <>
         <div>
           {
             res.map((ele, i)=>{
               return (
                    <h3 align="center" key={i} className={style.Output}>{ele.fName}</h3>
               )
             })
           }
         </div>
        </>
    )
}
export default Output;