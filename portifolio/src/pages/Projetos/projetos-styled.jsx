import styled from "styled-components";

export const Main = styled.main`
  padding: 0.25px;
  height: 100vh;
  display: flex;
`;

export const Section = styled.section`
  display: flex;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  background-color: aquamarine;

  h1 {
    color: black;
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Cards = styled.section`
  margin: 0 auto;
  width: 20vw;
  height: 42vh;
  border-radius: 30px;
  background-color: white;
  font-size: 50px;
  text-align: center;

  a {
    background-color: red;
    padding: 4%;
    border-radius: 20px;
    color: white;
  }

  img {
    width: 250px;
    height: 110px;
  }

  @media (max-width: 1024px) {
    width: 150px;
    heigth: 150px;
    a {
      font-size: 18px;
    }

    img {
      width: 140px;
      height: 50px;
    }

    h1 {
      color: black;
      font-size: 15px;
      margin-top: 30px;
      text-align: center;
    }
  }
`;

