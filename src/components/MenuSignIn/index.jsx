import { Container } from "./style";
import {Link} from 'react-router-dom';
import { Title } from "../Title/index"
import { Input } from "../Input"
import { Button } from "../Button"
import { FiMail,FiLock } from "react-icons/fi"

export function MenuSignIn(){
return(
<Container>
  <Title text="Faça Seu Login"/>
  <div className="test">
  <Input placeholder="E-mail" type="mail" icon={FiMail}/>
  <Input placeholder="Senha" type="password" icon={FiLock}/>
  </div>
  <Button className="button" text="Entrar"/>
  <Link to='/register'>Criar Conta</Link> 
</Container>


)

}