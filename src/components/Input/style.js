import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
height: 56px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY_200};
border-radius: 10px;
display: inline-flex;
align-items: center;
padding: 16px ;
gap: 16px;

>input{
width: 100%;
height: 56px;
border-radius: 10px;
border: none;
background-color: transparent;
color: ${({ theme }) => theme.COLORS.WHITE};
font-weight: 400;
font-size: 16px;

&::placeholder{
  color: ${({ theme }) => theme.COLORS.GRAY_200};
}

}
`