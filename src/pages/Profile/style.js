import styled from 'styled-components';

export const Container = styled.div`

.banner{
width: 100%;
height: 144px;
background-color: hsla(349, 100%, 76%, 0.05);

>.linkBack{
display: flex;
flex-direction: row;
gap: 8px;
align-items: center;
justify-content: flex-start;
color:${({ theme })=>theme.COLORS.PINK};
position:absolute;
left: 144px;
top: 64px;
}
}

.avatar{
position: relative;
margin: -93px auto 64px;
width: 186px;
height: 186px;

>img{
width: 186px;
height: 186px;
border-radius: 50%;
}

>label{
width: 48px;
height: 48px;
background-color: ${({ theme }) => theme.COLORS.PINK};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: 4px;
right: 7px;
cursor: pointer;
}

input{
display: none;
}

svg{
width: 20px;
height: 20px;
color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
}
}


.content{
  max-width: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:0 auto 20px;
}

.userData{
display: flex;
flex-direction: column;
margin-bottom:24px;
gap: 24px;

>.userLogin{
display: flex;
flex-direction: column;
gap: 8px;
input{
&::placeholder{
  color: ${({ theme }) => theme.COLORS.WHITE};
}}

}
>.userPass{
display: flex;
flex-direction: column;
gap: 8px;
}
}

`;