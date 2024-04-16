import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main";
import * as S from "../Sobre/sobre-styled.jsx";

function Sobre(){
   return (
     <>
       <S.Main>
        <Header />
         <S.Section>
           <Main />
         </S.Section>
       </S.Main>
     </>
   );
}

export default Sobre;