function CapitalizeAll(prop) {
    if(prop.isCaptlized === 1){
 return(<h1>{prop.text.toUpperCase()}</h1>)}
 else{
     return(<h1>{prop.text.toLowerCase()}</h1>)
 }
}
export default CapitalizeAll;
