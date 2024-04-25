import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Body from "../layout/Body";
import Noticias from "../pages/Noticias";
import Noticia from "../pages/Noticia";
import Produtos from "../pages/Produtos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* responsável por englobar o app em navegação */}
      <Routes>
        {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticia/:id" element={<Noticia />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
