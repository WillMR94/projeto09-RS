import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 116px;
padding: 0 123px 0 65px;
gap:64px;
border-bottom: 1px solid #3E3B47;


h3{
font-size: 24px;
font-weight: 700;
color:${({theme})=>theme.COLORS.PINK}
}

p{
font-size: 14px;
font-weight: 400;
color:${({theme})=>theme.COLORS.WHITE}
}

a{
font-size: 14px;
font-weight: 400;
color:${({theme})=>theme.COLORS.GRAY_200};
}

.profile{
display: flex;
flex-direction: row;
gap: 9px;
min-width: 200px;
align-items: center;
justify-content: center;

img{
width: 64px;
height: 64px;
border-radius:50%;
border: 1px solid #3E3B47;
}
}

.profile-text{
display: flex;
flex-direction: column;
align-items: flex-end;
}
`;