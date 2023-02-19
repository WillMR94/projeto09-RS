import { Container } from './style';
import { Link } from "react-router-dom";
import { Header } from '../../components/Header';
import { FiArrowLeft,FiClock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { InputText} from '../../components/InputText'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonBlack } from '../../components/ButtonBlack'


export function CreateMovie(){
  return(
  <Container>
    <Header/>
    <Link to='/' className='linkBack' ><FiArrowLeft/>Voltar</Link>
    <div className='content'>
      <h2>Novo filme</h2>
      <div className='title'>
        <div className='subtitle'>
          <Input placeholder='Título'/>
          <Input placeholder='Sua nota(de 0 a 5)'/> 
        </div>
          <InputText placeholder='Observações'/>
      </div>
      <span>
        Marcadores
      </span>
      <div className='markers'>
        <NoteItem value="React"/>
        <NoteItem isNew placeholder="Novo marcador"/>   
      </div>
      <div className='buttons'>
        <ButtonBlack text='Excluir filme'/>
        <Button text='Salvar alterações'/>
      </div>

    </div>
  </Container>


  )
}