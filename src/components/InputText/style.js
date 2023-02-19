import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
height: 274px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY_200};
border-radius: 10px;
display: inline-flex;
align-items: center;
gap: 16px;

>textarea{
width: 100%;
height: 274px;
border-radius: 10px;
border: none;
background-color: transparent;
color: ${({ theme }) => theme.COLORS.WHITE};
font-weight: 400;
font-size: 16px;
resize: none;
padding:16px 19px;


&::placeholder{
  color: ${({ theme }) => theme.COLORS.GRAY_200};
}

}
`