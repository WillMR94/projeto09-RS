import { Container } from './style'

export function ButtonBlack({text,icon:Icon,...rest}){
  return(
    <Container type="button" {...rest}>
    {Icon && <Icon size={20}/>}
    {text}
    </Container>
  );
}