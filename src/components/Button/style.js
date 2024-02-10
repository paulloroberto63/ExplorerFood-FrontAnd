import styled from "styled-components";


export const Container = styled.button`
 display: flex;
 align-items: center;
 gap: 10px;
 width: 100%;
 background-color: ${({theme}) => theme.COLORS.TOMATO_200};
 color: ${({theme}) => theme.COLORS.LIGHT_100};

 height: 60px;
 border: 0;
 padding: 0 40px;
 margin-top: 15px;
 font-weight: 400;
 border-radius: 5px;



 &:disabled {
    opacity: 0.5;
 }

 > svg {
   margin-left: 2px;
   font-size: 30px;
   ;
 }


`
