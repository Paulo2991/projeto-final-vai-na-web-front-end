import Header from "../../components/Header/Header";
import * as S from "./projetos-styled.jsx";
import restaurante from "../../assets/restaurantehtml.png";
import nlwExpert from "../../assets/nlwexpert.png";
import nlw from "../../assets/nlw.png";
import Carrosel from "react-elastic-carousel";

function Projetos() {
  return (
    <>
      <S.Main>
        <Header />
        <S.Section>
          <Carrosel>
            <S.Cards>
              <img src={restaurante} />
              <h1>Projetos</h1>
              <a
                href="https://github.com/Paulo2991/ciclo-3-aula-1"
                target="_black"
              >
                Link Do Projeto
              </a>
            </S.Cards>
            <S.Cards>
              <img src={nlwExpert} />
              <h1>Projetos</h1>
              <a href="https://github.com/Paulo2991/nlw-expert" target="_black">
                Link Do Projeto
              </a>
            </S.Cards>
            <S.Cards>
              <img src={nlw} />
              <h1>Projetos</h1>
              <a
                href="https://github.com/Paulo2991/projeto-nlw-rochetseat-react"
                target="_black"
              >
                Link Do Projeto
              </a>
            </S.Cards>
          </Carrosel>
        </S.Section>
      </S.Main>
    </>
  );
}

export default Projetos;
