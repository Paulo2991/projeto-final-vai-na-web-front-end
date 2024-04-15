import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     border: 0;
     font-family: "Arial",sans-serif;
     font-size: 42.6%;  
     list-style-type: none;
     text-decoration: none;
   }                        
`;

export const Header = styled.header`
  height: 15vh;
  padding: 0 1%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: blue;

  @media screen and (max-width: 600px) {
    width: 174%;
  }
`;

export const Foto = styled.img`
  width: 80px;
  border-radius: 50%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const Li = styled.li`
  font-size: 60px;
  font-weight: 30px;
  a{
    color: white;
  }

  a:hover{
    color: #508896;
  }
`;



