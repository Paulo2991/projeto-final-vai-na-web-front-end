import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     border: 0;
     font-family: "Arial",sans-serif;
     font-size: 42%;  
     list-style-type: none;
     text-decoration: none;
   }                        
`;

export const Header = styled.header`
  width: 150px;
  background-color: blue;
  text-align: center;
`;

export const Foto = styled.img`
  width: 80px;
  border-radius: 60%;

`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const Li = styled.li`
  font-size: 60px;
  font-weight: 30px;
  
  a{
    color: white;
  }

  a:hover{
    color: #bd0f0f;
  }
`;



