import './AddValue.css';

function AddValue(props){
    let amount = props.amount;
       const clickHandler = () =>{
            amount = 234;
            console.log(amount)
       }
    return(
        <div>
            <div className='AddValue-item'> {amount} </div>
            <button onClick={clickHandler} className='AddValue-item_price' >Click Me</button>
        </div>
    );
}
export default AddValue;
