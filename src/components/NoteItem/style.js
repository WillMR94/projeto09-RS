import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
border-radius: 10px;
padding-right: 16px;
background-color:${({theme,isNew })=> isNew ? 'transparent' : theme.COLORS.BACKGROUND_600 } ;
color: ${({ theme }) => theme.COLORS.GRAY_300};
border: ${({ theme, isNew }) => isNew ? '2px dashed' : 'none'};


>button{
border: none;
background: none;
color:${({ theme }) => theme.COLORS.PINK};
SVG{
font-size: 22px;
}
}

>input{
width: 138px;
height: 56px;
padding: 11px 0 16px 16px;
color: ${({ theme }) => theme.COLORS.WHITE};
background: transparent;
border: none;

&::placeholder{
  color: ${({ theme }) => theme.COLORS.GRAY_300};
}
}

p{
width: auto;
height: 56px;
padding: 15px;
color: ${({ theme }) => theme.COLORS.WHITE};
background: transparent;
border: none;
}
`;