import React from 'react';
import { toast } from 'react-toastify';

const Options = ({option, correctAns}) => {
    return (
        <div>
            <div onClick={()=>{
                if(option === correctAns){
                    toast.success('Your Ans is Correct')
                }
                else{
                    toast.error('Your ans is incorrect')
                }
            }} className='ans-btn'>{option}</div>
        </div>
    );
};

export default Options;