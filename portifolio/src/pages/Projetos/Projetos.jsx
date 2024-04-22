import Header from "../../components/Header/Header";
import * as S from "./projetos-styled.jsx";
import restaurante from "../../assets/restaurantehtml.png";
import biteduca from "../../assets/biteduca.png";
import nlw from "../../assets/nlw.png";

function Projetos() {
  return (
    <>
      <S.Main>
        <Header />
        <S.Section>
          <S.Cards>
            <h1>Projetos Em HTML E CSS</h1>
            <img src={restaurante} />
            <a
              href="https://github.com/Paulo2991/ciclo-3-aula-1"
              target="_black"
            >
              Link Do Projeto
            </a>
          </S.Cards>
          <S.Cards>
            <h1>Projetos Em HTML E CSS</h1>
            <img src={biteduca}/>
            <a href="" target="_black">
              Link Do Projeto
            </a>
          </S.Cards>
          <S.Cards>
            <h1>Projetos Em HTML E CSS</h1>
            <img src={nlw}/>
            <a href="" target="_black">
              Link Do Projeto
            </a>
          </S.Cards>
        </S.Section>
      </S.Main>
    </>
  );
}

export default Projetos;
