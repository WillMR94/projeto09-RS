import { Container } from "./style";
import {Link} from 'react-router-dom'
import { Title } from "../Title/index"
import { Input } from "../Input"
import { Button } from "../Button"
import { FiUser,FiLock,FiMail,FiArrowLeft } from "react-icons/fi"

export function MenuSignUp(){
return(
<Container>
  <Title text="Crie sua conta"/>
  <div className="test">
  <Input placeholder="Nome" type="text" icon={FiUser}/>
  <Input placeholder="E-mail" type="mail" icon={FiMail}/>
  <Input placeholder="Senha" type="password" icon={FiLock}/>
  </div>
  <Button className="button" text="Entrar"/>
  <Link to='/'><FiArrowLeft/>Voltar para o login</Link>
</Container>


)

}