import { Container,LogoIMG } from './style'
import {Link} from 'react-router-dom';
import { MenuSignIn } from '../../components/MenuSignIn'



export function SignIn(){
  return(
    <Container>
      <MenuSignIn/>
      <LogoIMG/>
    </Container>


  )
}