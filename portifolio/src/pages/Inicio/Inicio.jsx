import Header from "../../components/Header/Header.jsx";
import * as S from "../Inicio/inicio-styled.jsx";
import foto from "../../assets/imagempaulo.jpg";

function Inicio() {
  return (
    <>
      <S.Main>
        <Header />
        <S.Section>
          <S.Nome>Paulo Henrique Vaz Barbosa</S.Nome>
          <img src={foto} />
        </S.Section>
      </S.Main>
    </>
  );
}

export default Inicio;
