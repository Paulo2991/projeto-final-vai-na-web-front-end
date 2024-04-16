import { GlobalStyled } from "./components/Header/header-styled.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Projetos from "./pages/Projetos/Projetos.jsx";

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
