import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add,sub,multiplication,clear,divide} from './Actions/action';
export const LandingPage = () => {
    const output = useSelector((state) => state);
    console.log(output);
  const dispatch = useDispatch();
  return (
    <div>
        First Number : {output.add.num1}<br />
        Second Number:{output.add.num2}
        <div>
        Sum is:{output.add.res}<br />
        <button onClick={()=>dispatch(add())}>Add</button>
        </div>
       <div>
        Substraction is:{output.subs.res}<br />
        <button onClick={()=>dispatch(sub())}>substraction</button>
       </div>
       <div>
        Multiplication is:{output.multi.res}<br />
        <button onClick={()=>dispatch(multiplication())}>multiplication</button>
       </div>
       <div>
        Divide is:{output.divide.res}<br />
        <button onClick={()=>dispatch(divide())}>Divide</button>
       </div>
       <div>
         clear:{output.clear.res}<br />
        <button onClick={()=>dispatch(clear())}>Clear</button>
       </div>
    </div>
  )
}
