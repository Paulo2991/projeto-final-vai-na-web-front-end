import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  background-color: gray;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 3rem;
  height: calc(100% - 12vh);
  padding: 3rem 0px;
`;


export const Apresentacao = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
`;

export const Curriculo = styled.a`
   color: white;
   padding: 1.5%;
   border-radius: 50px;
   background-color: red;
`;

