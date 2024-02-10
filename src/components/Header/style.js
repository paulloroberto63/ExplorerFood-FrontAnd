import styled from "styled-components";

export const Container = styled.header`
display: flex;

width: 100%;
height: 160px;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.DARK_600};

background: ${({ theme }) => theme.COLORS.DARK_600};

`

export const Brand = styled.div`
 display: flex;
 padding: 57px  130px;
  gap: 20px;

`
export const Search = styled.div`
 display: flex;
 align-items: center;
 
 width: 40%;
 `

 export const Requests = styled.div`
  display: flex;
  padding: 33px 0 0 250px;
`
 export const Logaout = styled.div`
 font-size: 38px;
 margin: 60px 0 0 150px;
 
 
 `
 