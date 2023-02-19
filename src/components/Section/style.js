import styled from 'styled-components';

export const Container = styled.div`
margin: auto;
display: flex;
flex-direction: column;
background-color: hsl(349, 100%, 76%,5%);
border-radius: 16px;
padding: 32px;
margin: 0 0 24px;
&&:hover{
  background-color: hsl(349, 100%, 76%,10%);
}


h1{
font-size: 24px;
font-weight: 700;
color: ${({theme})=>theme.COLORS.WHITE};
margin-bottom: 8px;
}

>span{
margin-top: 15px;
margin-bottom: 31px;
font-size: 16px;
font-weight: 400;
color:${({theme})=>theme.COLORS.GRAY_300};
};

.Tags{
display: inline-flex;
}`;

