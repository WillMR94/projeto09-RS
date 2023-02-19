import { Container } from "./style";
import { FiPlus,FiX } from "react-icons/fi";
export function NoteItem({isNew, value, onClick, ...rest}){
if(isNew){  return(
  <Container isNew={isNew}>
    <input
     value={value}
     readOnly={!isNew}
     {...rest}/>

    <button
    type="button"
    onClick={onClick}>
    {isNew ? <FiPlus/> : <FiX/>}
    </button>
  </Container>
)}
else
  return(
    <Container isNew={isNew}>
      <p
       value={value}
       readOnly={!isNew}
       {...rest}>{value}</p>

      <button
      type="button"
      onClick={onClick}>
      {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}

