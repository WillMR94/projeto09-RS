import styled from "styled-components";

export const Container = styled.div`
width: 100% ;
display:flex;
flex-direction: column;
margin-top: -19px;
padding: 29px 161px 29px 134px;
justify-content:center;

.test{
display:flex;
flex-direction: column;
gap: 8px;
margin-bottom: 16px;
}

.button{
margin-bottom: 42px;
}

a{
display: inline-flex;
gap:8px;
margin: 0 auto;
font-size: 16px;
font-weight: 400;
color: ${({ theme }) => theme.COLORS.PINK};
>SVG{
width: 21px;
height: 21px;

}
}

`;

