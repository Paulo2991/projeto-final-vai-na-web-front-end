import * as S from "./header-styled.jsx";
import foto from "../../assets/imagempaulo.jpg";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Header() {
  return (
    <>
      <BrowserRouter>
        <S.Header>
          <S.Foto src={foto} />
          <nav>
            <S.Ul>
              <S.Li>
                <Link to="/">
                  Home
                </Link>
              </S.Li>
              <S.Li>
                <Link to="#">Sobre</Link>
              </S.Li>
              <S.Li>
                <Link to="#">Projetos</Link>
              </S.Li>
              <S.Li>
                <Link to="#">Habilidades</Link>
              </S.Li>
            </S.Ul>
          </nav>
        </S.Header>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Header;
