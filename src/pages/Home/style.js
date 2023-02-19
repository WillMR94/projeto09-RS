import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-rows: 116px 124px auto;
width: 100%;
height: 100vh;;



.title{
display: grid;
grid-template-columns: 184px 207px;
margin: 0 125px 0;
gap: 10px;
align-items: center;
justify-content: space-between;

}

main{
overflow-y: auto;
padding: 0 8px 0;
margin: 0 115px 0;

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
`;