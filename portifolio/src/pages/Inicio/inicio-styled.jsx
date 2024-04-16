import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  padding: 0.25px;
  display: flex;
`;


export const Section = styled.section`
  display: flex;
  padding: 0 4%;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: aquamarine;

  img {
    width: 200px;
    border-radius: 60%;
  }

  @media screen and (max-width: 600px) {    
    img {
      width: 40px;
      border-radius: 60%;
    }
    h1{
      font-size: 20px;
      text-align: right;
    }
  }
`;

export const Nome = styled.h1`
  font-size: 50px;
  color: red;
  word-wrap: break-word;
`