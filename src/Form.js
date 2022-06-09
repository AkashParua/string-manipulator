import React from "react";
import CapitalizeAll from "./CapitalizeAll";
function Form() {
   const[text, setText] = React.useState("");
   const[Input,setInput] = React.useState("");
   const[isCaptlized,setIsCaptlized] = React.useState(1);
   const handlesubmit = (e) => {e.preventDefault();setInput(text.slice());}
   return(
    <div>
        <h1 >{text}</h1>
       <form onSubmit={handlesubmit} className="h-36 w-full">
           <label>Enter Your Text</label>
           <input type="text" value={text} onChange={e => {setText(e.target.value); }}/>
           <input type="submit"/>
       </form>
       <div className="h-20 w-full bg-gray-400 text-white">{Input}</div>
        <button onClick={() => {setIsCaptlized(isCaptlized*-1);}}>{isCaptlized}</button>
        <CapitalizeAll text={Input} isCaptlized={isCaptlized}/>
       </div>
    
   )
    
}
export default Form;