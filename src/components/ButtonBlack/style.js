import styled from 'styled-components'

export const Container=styled.button`

width: 100%;
height: 56px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
border-radius:10px;
border: none;
font-family: 'Roboto Slab', serif;
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.COLORS.PINK};
display: flex;
align-items: center;
justify-content: center;

&:hover{
  opacity: 0.9;
}
`;