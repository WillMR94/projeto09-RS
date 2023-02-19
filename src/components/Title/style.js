import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 48px;
width: 100%;

h1{
font-size:48px;
font-weight: 700;
color:${({ theme }) => theme.COLORS.PINK}
}

span{
font-size: 14px;
font-weight: 400;
color: ${({ theme }) => theme.COLORS.GRAY_50};
}

h2{
font-size: 24px;
font-weight: 500;
margin-top: 48px;
color: ${({ theme }) => theme.COLORS.WHITE};
}


`;

