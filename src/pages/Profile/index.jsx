import { Container } from './style';
import { Link } from "react-router-dom";
import { FiArrowLeft,FiCamera,FiLock,FiUser,FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'


export function Profile(){
  return(
  <Container>
    <div className='banner'>
    <Link to='/' className='linkBack' ><FiArrowLeft/>Voltar</Link>
    </div>


    <div className='avatar'>
    <img src='https://github.com/WillMR94.png' alt='oi'></img>
    <label htmlFor="avatar">
    <FiCamera/>
    <input 
    id="avatar"
    type="file"
    />
    </label>
    </div>
    <div className='content'>
    <div className='userData'>
    <div className='userLogin'>
    <Input icon={FiUser} type='text' placeholder='Willian de Moraes' />
    <Input icon={FiMail} type='mail' placeholder='Willian@gmail.com' />
    </div>
    <div className='userPass'>
    <Input icon={FiUser} type='password' placeholder='Senha atual' />
    <Input icon={FiMail} type='password' placeholder='Nova senha' />
    </div>
    </div>
    <Button text='Salvar' />
    </div>
  </Container>


  )
}