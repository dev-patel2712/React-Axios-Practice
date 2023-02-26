// import { UserOutlined } from '@ant-design/icons';
import style from './Input.module.css'
import React from 'react';

const Input = ({input, value, onClick}) =>{
 return (
<>
       <h2 className={style.heading}>
           Hello User!!!
       </h2>

       <input size="large"
        value={value} 
        placeholder="Enter Your Name" 
        className={style.input} 
        onChange={input}/> 
      
       <button className={style.Button} onClick={onClick}>
            ADD
       </button>
</>
 )
}
export default Input;