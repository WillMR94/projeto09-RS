import { Container } from './style';
import {Link} from 'react-router-dom';
import { Input } from '../Input'

export function Header(){
  return(
    <Container>
<Link to='/'><h3>RocketMovies</h3></Link>

<Input placeholder='Pesquisar pelo titulo'/>
<div className='profile'>
  <div className='profile-text'>
  <p>Willian de Moraes</p>
  <Link to='/'>sair</Link>
  </div>
<Link to='/profile'><img src='https://github.com/WillMR94.png' alt='oi'></img></Link>
</div>
</Container>


  );
}