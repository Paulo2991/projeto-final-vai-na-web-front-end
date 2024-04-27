import * as S from "./footer-styled.jsx";
import Carrosel from "react-elastic-carousel";

function Footer() {
  return (
    <>
      <S.Footer>
        <h1>Contatos</h1>
        <S.ContanerImagens>
          <Carrosel>
            <a
              href="https://www.linkedin.com/in/paulo-henrique-vaz-barbosa-412a15160/"
              target="_blank"
            >
              <img src="https://t.ctcdn.com.br/IwwDh-BajTE4ZwE4zuIcvz9Q2ZY=/i490027.jpeg" />
            </a>
            <a
              href="https://github.com/Paulo2991?tab=repositories"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" />
            </a>
            <a href="https://www.instagram.com/henriquevaz123/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" />
            </a>
            <a href="mailto:paulovaz38034@gmail.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Logo_Gmail_%282015-2020%29.svg"
                alt="paulovaz38034@gmail.com"
                title="paulovaz38034@gmail.com"
              />
            </a>
          </Carrosel>
        </S.ContanerImagens>
      </S.Footer>
    </>
  );
}

export default Footer;
