import Botao from "./components/layout/Botao.js";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";

import LuizArrI from "./Luiz.js";
import FabioArrI from "./Fabio.js";
import LukasArrI from "./Lukas.js";
import MoisesArrI from "./Moises.js";
import NicolasArrI from "./Nicolas.js";

function App() {
  return (
    <div>
      <Header />

      <Botao
        texto="Album do Luiz gay"
        id="Luiz"
        idB="btnLuiz"
        fotos={LuizArrI}
      />
      <Botao
        texto="Album do Arrombado do Fabio gay"
        id="Fabio"
        idB="btnFabio"
        fotos={FabioArrI}
      />

      <Botao
        texto="Album do Nagatuh FF <3"
        id="Moises"
        idB="btnMoises"
        fotos={MoisesArrI}
      />
      <Botao
        texto="Album do Nicolas Bahino Cu de aracaje ainda mais gay"
        id="Nicolas"
        idB="btnNicolas"
        fotos={NicolasArrI}
      />
      <Botao
        texto="Album do Lukas depressivo gay"
        id="Lukas"
        idB="btnLukas"
        fotos={LukasArrI}
      />

      <Footer />
    </div>
  );
}

export default App;
