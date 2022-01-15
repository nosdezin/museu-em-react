import Botao from "./components/layout/Botao.js";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";

import LuizArrI from "./Luiz.js";
import FabioArrI from "./Fabio.js";
import LukasArrI from "./Lukas.js";
import MoisesArrI from "./Moises.js";
import NicolasArrI from "./Nicolas.js";

const listaPessoas = [
  {texto: "Album do Luiz gay",fotos: LuizArrI,id: "Luiz",idB: "btnLuiz"},
  {texto: "Album do Arrombado do Fabio gay",fotos: FabioArrI,id: "Fabio",idB: "btnFabio"},
  {texto: "Album do Nagatuh FF <3",fotos: MoisesArrI,id: "Moises",idB: "btnMoises"},
  {texto: "Album do Nicolas Bahino Cu de aracaje ainda mais gay",fotos: NicolasArrI,id: "Nicolas",idB: "btnNicolas"},
  {texto: "Album do Lukas depressivo gay",fotos: LukasArrI,id: "Lukas",idB: "btnLukas"}
]

function App() {
  return (
    <div>
      <Header />

      {listaPessoas.map((item) => (<Botao texto={item.texto} fotos={item.fotos} id={item.id} idB={item.idB}/>))}

      <Footer />
    </div>
  );
}

export default App;
