import * as S from "./components/Header/header-styled.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
function App() {
  return (
    <>
      <S.GlobalStyled />
      <Header />
      <Main />
    </>
  )
}

export default App;
