import { Container } from './style'

export function InputText({icon:Icon, ...rest}){
  return(

<Container>
{Icon && <Icon size={20}/>}
<textarea {...rest}/>
</Container>

  );
}