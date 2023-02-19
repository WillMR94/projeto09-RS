import styled from "styled-components";

export const Container = styled.div`
width: 100% ;
display:flex;
flex-direction: column;
margin-top: -41px;
padding: 51px 161px 51px 134px;
justify-content:center;

.test{
display:flex;
flex-direction: column;
gap: 8px;
margin-bottom: 33px;
}

.button{
margin-bottom: 33px;
}

a{
margin: 0 auto;
font-size: 16px;
font-weight: 400;
color: ${({ theme }) => theme.COLORS.PINK};
}

`;

