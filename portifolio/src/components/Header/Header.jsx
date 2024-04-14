import * as S from "./header-styled.jsx";
import foto from "../../assets/react.svg";

function Header() {
  return (
    <>
      <S.Header>
        <S.Foto src={foto} />
        <nav>
          <S.Ul>
            <S.Li>
              <a>Home</a>
            </S.Li>
            <S.Li>
              <a>Sobre</a>
            </S.Li>
            <S.Li>
              <a>Projetos</a>
            </S.Li>
            <S.Li>
              <a>Habilidades</a>
            </S.Li>
          </S.Ul>
        </nav>
      </S.Header>
    </>
  );
}

export default Header;
