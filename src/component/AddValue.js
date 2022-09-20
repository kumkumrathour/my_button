import React,{useState} from 'react';
import './AddValue.css';
import AddForm from './AddForm';

function AddValue(props){
      const[amount ,setAmount]= useState(props.amount)
       const clickHandlerInc = () =>{
            setAmount(Math.floor(amount+1));
            console.log(amount)
       }

       const clickHandlerDec = () =>{
        if(amount>0){
             setAmount(Math.floor(amount-1));
             console.log(amount)
        }
        else{
            alert("sorry,you react the minimum amount")
            setAmount(0);
        }
       }
    
    // const submitHandler = (event) =>{
    //        event.preventDefault();
    //        const wholeData ={
    //          total:amount
    //     }   
    //     console.log(wholeData) ;
    // };

    return(
        <div>
            <AddForm/>
            <div className='AddValue-item'> {amount} </div>
            <div>
            <button onClick={clickHandlerInc} className='AddValue-item_price' >Increment</button>
            </div>
            <div>
            <button onClick={clickHandlerDec} className='AddValue-item_price' >Decrement</button>
            </div>

        </div>
    );
}
export default AddValue;
