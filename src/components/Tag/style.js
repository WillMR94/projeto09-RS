import styled from "styled-components";

export const Container=styled.div`
display: flex;
align-items: center;
flex-wrap:wrap;
background-color:${({ theme }) => theme.COLORS.GRAY_400};
width: fit-content;
padding: 5px 16px ;
border-radius: 8px;
margin-right: 8px;


span{
font-size: 12px;
font-weight: 400;
color:${({ theme }) => theme.COLORS.GRAY_100}
}

`;