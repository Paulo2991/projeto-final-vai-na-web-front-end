import * as S from "./main-styled.jsx";
import curriculo from "../../assets/Curriculo.pdf"
function Main() {
  return (
    <>
      <main>
        <S.Section>
          <S.Apresentacao id="apresentacao">
            <h1>Sobre</h1>
            <h2>Desenolvedor Front-End</h2>
            <p>
              Olá sou Paulo Henrique Vaz Barbosa Bacharel Em Sistemas De
              Informação sou pró-ativo trabalho bem em equipe, tenho muita
              facilidade em aprender. Minhas principais habilidades estão no
              desenvolvimento Front-end, HTML CSS JavaScript, React, Angular e
              VUE. Uso a criatividade para resolver os problemas do dia a dia,
              pretendo contrubuir com toda capacidade analitica que tenho a
              favor da empresa.
            </p>
            <S.Curriculo href={curriculo} download="Curriculo.pdf">
              Link Curriculo
            </S.Curriculo>
          </S.Apresentacao>
        </S.Section>
        <S.Habilidades id="habilidades">
          <h1>Habilidades</h1>
          <S.ContanerImagens>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
          </S.ContanerImagens>
        </S.Habilidades>
      </main>
    </>
  );
}

export default Main;
