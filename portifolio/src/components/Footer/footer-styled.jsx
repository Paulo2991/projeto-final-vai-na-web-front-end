import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #207177;
  padding: 8rem;

  h1 {
    color: white;
    font-size: 46px;
    text-align: center;
  }

  a {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    width: 174vw;
  }
`;


export const ContanerImagens = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  gap: 30px;
  img {
    width: 90px;
    height: 90px;
  }
`;
