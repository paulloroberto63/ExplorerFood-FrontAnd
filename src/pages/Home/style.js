import styled from "styled-components";

export const Container = styled.div`

    > main {
        width: 100%;

        position: relative;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        overflow-x: hidden;
    }
`
export const Introduction = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  height: 295px;
  margin-top: 140px;
  
  background: linear-gradient(to bottom, #091E26, #00131C);

   > img {
      margin-bottom: 110px;
    

    position: relative;
   }
`

export const IntroductionText = styled.div`
display: flex;
flex-direction: column;


font-family: poppins;
font-weight:500;
font-size: 20px;

margin-left: 60px;



`
