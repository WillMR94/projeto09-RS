import { Container } from './style';
import { Link } from "react-router-dom";
import { MdAdd } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';


export function Home(){
  return(
  <Container>
    <Header/>
    <div className='title'>
      <h2>Meus filmes</h2>
    <Link to='/new'><Button text='Adicionar filme' icon={MdAdd}/></Link>
      
    </div>
    <main>
    <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>
        <Section
    data={{
    title: 'Interestellar',
    content:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ...',
    tags:[
      {id:'1',name:'Ficção Cientifíca',},
      {id:'2',name:'Drama',},
      {id:'3',name:'Família'}
    ]}}/>

    </main>
  </Container>


  )
}