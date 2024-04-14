import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
   *{
     margin:0;
     padding:0;
     box-sizing: border-box;
     border:0;
     font-family: "Arial",sans-serif;
     font-size: 42.6%;  
     list-style-type: none;
     text-decoration: none;
   }                        
`;

export const Header = styled.header`
  height: 100px;
  padding: 0 2%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: blue;
`;

export const Foto = styled.img`
  width: 100px;
  border-radius: 50%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const Li = styled.li`
  font-size: 60px;
  font-weight: 30px;
  color: white;
`;


