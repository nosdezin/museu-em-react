import Botao from "./components/layout/Botao.js";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";

// Luiz
import luiz1 from "./imagens/luiz1.png";
import luiz2 from "./imagens/luiz2.png";
import luiz3 from "./imagens/luiz3.jpg";
import luiz from "./imagens/luiz.jpg";
import luiz4 from "./imagens/luiz4.jpg";
import luiz5 from "./imagens/Luiz5.jpg";
import luiz6 from "./imagens/luiz6.jpg";
import luiz7 from "./imagens/luiz.png";
import luiz8 from "./imagens/Luiz1.jpg";
import luiz9 from "./imagens/luiz2.jpg";

// fabio
import fabio from "./imagens/fabio.jpg";
import fabio2 from "./imagens/fabio.png";
import fabio3 from "./imagens/fabio1.jpg";
import fabio4 from "./imagens/fabio4.jpg";
import fabio5 from "./imagens/fabio5.png";

function App() {
  return (
    <div>
      <Header />

      <Botao
        texto="Album do Luiz gay"
        id="Luiz"
        idB="btnLuiz"
        fotos={[
          luiz1,
          luiz2,
          luiz3,
          luiz,
          luiz4,
          luiz5,
          luiz6,
          luiz7,
          luiz8,
          luiz9,
        ]}
      />
      <Botao
        texto="Album do Arrombado do Fabio gay"
        id="Fabio"
        idB="btnFabio"
        fotos={[fabio, fabio2, fabio3, fabio4, fabio5]}
      />

      {/* <Botao texto="Album do Nagatuh FF <3" id="Moises" idB="btnMoises" />
      <Botao texto="Album do Nicolas Bahino Cu de aracaje ainda mais gay" id="Nicolas" idB="btnNicolas" />
      <Botao texto="Album do Lukas depressivo gay" id="Lukas" idB="btnLukas" /> */}

      <Footer />
    </div>
  );
}

export default App;
