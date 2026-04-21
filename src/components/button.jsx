
import './button.css'
function Btn({name,onClick}){
return <>

<button className="text-red-500" onClick={onClick}>{name}</button>



</>






}


export default Btn;