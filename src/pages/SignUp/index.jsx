import { Container,LogoIMG } from './style'
import {Link} from 'react-router-dom';
import { MenuSignUp } from '../../components/MenuSignUp'



export function SignUp(){
  return(
    <Container>
      <MenuSignUp/>
      <LogoIMG/>
    </Container>


  )
}