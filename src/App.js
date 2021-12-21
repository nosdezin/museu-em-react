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
import fabio6 from "./imagens/fabio6.jpg";
import fabio7 from "./imagens/fabio7.jpg";
import fabio8 from "./imagens/fabio8.jpg";
import fabio9 from "./imagens/fabio9.jpg";
import fabio10 from "./imagens/fabio10.jpg";
import fabio11 from "./imagens/fabio11.jpg";
import fabio12 from "./imagens/fabio12.png";
import fabio13 from "./imagens/fabio13.png";
import fabio14 from "./imagens/fabio14.jpg";

// Lukas
import lukas from "./imagens/lukas.jpg";
import lukas2 from "./imagens/lukas2.png";
import lukas3 from "./imagens/lukas3.jpeg";

// moises
import moises from "./imagens/moises.jpg";
import moises2 from "./imagens/moises.png";
import moises3 from "./imagens/moisesN.jpeg";
import moises4 from "./imagens/moises4.png";
import moises5 from "./imagens/moises5.png";
import moises6 from "./imagens/moises6.png";
import moises7 from "./imagens/moises7.png";
import moises8 from "./imagens/moises8.jpg";
import moises9 from "./imagens/moises9.jpg";
import moises10 from "./imagens/moises10.png";
import moises11 from "./imagens/moises11.jpg";
import moises12 from "./imagens/moises12.png";

// nicolas
import nicolas from "./imagens/nciolas.png";
import nicolas2 from "./imagens/nicolas2.png";
import nicolas3 from "./imagens/nicolas3.jpg";
import nicolas4 from "./imagens/nicolas.jpeg";
import nicolas5 from "./imagens/nicolas5.jpg";
import nicolas6 from "./imagens/nicolas6.jpg";
import nicolas7 from "./imagens/nicolas7.jpg";
import nicolas8 from "./imagens/nicolas8.jpg";
import nicolas9 from "./imagens/nicolas9.jpg";
import nicolas10 from "./imagens/nicolas10.jpg";
import nicolas11 from "./imagens/nicolas11.png";
import nicolas12 from "./imagens/nicolas13.png";
import nicolas13 from "./imagens/nicolas14.jpg";
import nicolas14 from "./imagens/nicolas15.jpg";
import nicolas15 from "./imagens/nicolas16.jpg";
import nicolas16 from "./imagens/nicolas17.jpg";

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
        fotos={[
          fabio,
          fabio2,
          fabio3,
          fabio4,
          fabio5,
          fabio6,
          fabio7,
          fabio8,
          fabio9,
          fabio10,
          fabio11,
          fabio12,
          fabio13,
          fabio14,
        ]}
      />

      <Botao
        texto="Album do Nagatuh FF <3"
        id="Moises"
        idB="btnMoises"
        fotos={[
          moises,
          moises2,
          moises3,
          moises4,
          moises5,
          moises6,
          moises7,
          moises8,
          moises9,
          moises10,
          moises11,
          moises12,
        ]}
      />
      <Botao
        texto="Album do Nicolas Bahino Cu de aracaje ainda mais gay"
        id="Nicolas"
        idB="btnNicolas"
        fotos={[
          nicolas,
          nicolas2,
          nicolas3,
          nicolas4,
          nicolas5,
          nicolas6,
          nicolas7,
          nicolas8,
          nicolas9,
          nicolas10,
          nicolas11,
          nicolas12,
          nicolas13,
          nicolas14,
          nicolas15,
          nicolas16,
        ]}
      />
      <Botao
        texto="Album do Lukas depressivo gay"
        id="Lukas"
        idB="btnLukas"
        fotos={[lukas, lukas2, lukas3]}
      />

      <Footer />
    </div>
  );
}

export default App;
