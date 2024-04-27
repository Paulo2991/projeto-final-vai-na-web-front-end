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
  justify-content: center;
  padding: 0 2%;
  background-color: aquamarine;

  .rec.rec-arrow {
    background-color: green;
    border-radius: 30%;
  }

  .rec.rec-arrow:hover {
    border-radius: 50%;
    background-color: red;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Cards = styled.section`
  margin: 0 auto;
  width: 28vw;
  height: 50vh;
  border-radius: 10px;
  background-color: white;
  font-size: 50px;
  text-align: center;

  a {
    background-color: red;
    padding: 4%;
    border-radius: 18px;
    color: white;
  }

  img {
    margin-top: 2px;
    width: 450px;
    height: 250px;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 1440px) {
    width: 300px;
    heigth: 180px;

    a {
      font-size: 18px;
    }

    img {
      width: 290px;
      height: 180px;
    }

    h1 {
      color: black;
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    width: 250px;
    heigth: 150px;

    a {
      font-size: 15px;
    }

    img {
      width: 240px;
      height: 160px;
    }

    h1 {
      color: black;
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 900px) {
    width: 190px;
    height: 220px;

    a {
      font-size: 15px;
    }

    img {
      width: 180px;
      height: 110px;
    }

    h1 {
      color: black;
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;

    img {
      width: 98%;
      height: 98%;
    }
  }

  @media (max-width: 320px) {
    a {
      font-size: 11px;
    }
  }
`;
