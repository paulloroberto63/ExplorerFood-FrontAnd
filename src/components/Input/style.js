import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   background-color: ${({theme}) => theme.COLORS.DARK_900};
   color: ${({theme}) => theme.COLORS.LIGHT_500};;

  margin-bottom: 8px;
  border-radius: 5px;


  > input {
    height: 52px;
    width: 100%;

    padding-left: 15px;

    color: ${({theme}) => theme.COLORS.LIGHT_200};
    background: transparent;
    border: 0;

    &placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};;
    }
  }
  
  > svg {
    margin-left: 40px
  }
`