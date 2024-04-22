import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 8rem 3rem;
  background-color: #207177;

  h1 {
    color: white;
    font-size: 60px;
    text-align: center;
  }

  h2 {
    color: white;
    font-size: 60px;
    text-align: center;
  }

  p {
    text-indent: 50px;
    color: white;
    letter-spacing: 3px;
  }

  @media screen and (max-width: 600px) {
    width: 174%;
  }
`;

export const Apresentacao = styled.div`
  font-size: 50px;
  text-align: center;
  
`;

export const Curriculo = styled.a`
   color: white;
   padding: 1.5%;
   border-radius: 50px;
   background-color: red;
`;

export const Habilidades = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #2c30ff;
  padding: 8rem 3rem;

  h1 {
    color: white;
    font-size: 46px;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 174%;
  }
`;

export const ContanerImagens = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center; 
  gap: 30px;
  img {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    gap: 2rem;
    img {
      width: 50px;
      height: 50px;
  }
}
`;


