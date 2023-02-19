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
padding-bottom: 100px;
overflow-y: auto;
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

.title{
display: inline-flex;
align-items: center;
justify-content: flex-start;
gap: 19px;
margin-bottom: 24px;

  >h2{
  font-size: 36px;
  font-weight: 500;
  color:${({theme})=>theme.COLORS.WHITE}
  }
}

.subTitle{
display:inline-flex;
align-items: center;
gap:8px;
margin-bottom:40px;

  >img{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({theme})=>theme.COLORS.PINK};
  }

  >SVG{
  color:${({theme}) =>theme.COLORS.PINK};
  width: 16px;
  height: 16px;
  }
}

.tags{
display: flex;
flex-direction:row;
margin-bottom: 40px;
}

span{
padding-right: 15px;
}
`;