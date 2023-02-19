import styled from 'styled-components';

export const Container = styled.div`
display: grid;
flex-direction: column;
grid-template-rows: 116px 85px auto;
width: 100%;
height: 100vh;


.linkBack{
width: 70px;
display: flex;
flex-direction: row;
gap: 8px;
align-items: center;
justify-content: flex-start;
color:${({ theme })=>theme.COLORS.PINK};
margin: 40px 106px 24px 123px;
}

.content{
display: flex;
flex-direction: column;
margin:0 106px 0 123px;
padding-bottom: 30px;
color: ${({ theme }) => theme.COLORS.GRAY_200};
overflow-y:auto;
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius:4px;
}
}

h2{
font-size: 36px;
font-weight: 500;
color:${({theme})=>theme.COLORS.WHITE};
margin-bottom:40px;
}

.title{
display: flex;
flex-direction: column;
gap:40px;
margin-bottom: 40px;
}

.subtitle{
display: flex;
flex-direction: row;
gap:40px;
}

span{
margin-bottom: 24px;
};

.markers{
width: 100%;
padding: 16px;
background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
border-radius: 8px;
display: flex;
flex-direction: row;
gap: 24px;
margin-bottom: 40px;
}

.buttons{
display: flex;
flex-direction:row;
gap: 40px;
}

`;