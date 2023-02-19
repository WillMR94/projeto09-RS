import styled from 'styled-components'
import Image from '../../Components/Assets/Logo.png'

export const Container = styled.div`

display:grid;
grid-template-columns:637px auto;
height: 100vh;
`

export const LogoIMG = styled.div`
flex: 1;
background: url(${Image}) no-repeat center center;
background-size: cover;
`;