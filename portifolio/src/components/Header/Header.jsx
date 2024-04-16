import * as S from "./header-styled.jsx";
import foto from "../../assets/imagempaulo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <S.Header>
        <S.Foto src={foto} />
        <nav>
          <S.Ul>
            <S.Li>
              <Link to="/">Home</Link>
            </S.Li>
            <S.Li>
              <Link to="/sobre">Sobre</Link>
            </S.Li>
            <S.Li>
              <Link to="/projetos">Projetos</Link>
            </S.Li>
          </S.Ul>
        </nav>
      </S.Header>
    </>
  );
}

export default Header;
