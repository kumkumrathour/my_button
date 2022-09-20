import React ,{useState} from "react";
import './AddForm.css';

function FormData(){
    const inputChangeHandler = (event)=>{
        const value =event.target.value;
        console.log(value);
        // setFormData({
        //     ...inputFromData,

        // })
  }
   const [inputFromData , setFormData] =useState({
    userName:'',
    passWord:'',
   })

  return (
<form >
            <div className="new_text__control">
            <label> username
            <input type = "text"  onChange={inputChangeHandler} value={inputFromData.userName} />
            </label><br/>
            <label> Password
            <input type = "number" onChange={inputChangeHandler} value={inputFromData.passWord}/>
            </label><br/>
            </div>
            <div className ='new_submit'>
              <button type='submit'> Whole submit</button>
            </div>
            </form>
  )
}
export default FormData;