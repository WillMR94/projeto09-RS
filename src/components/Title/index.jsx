import { Container } from "../Title/style";

export function Title({text,...rest}){
return(
<Container>
<h1>RocketMovies</h1>
<span>Aplicação para acompanhar tudo que assistir</span>
<h2>{text}</h2>
</Container>


)

}