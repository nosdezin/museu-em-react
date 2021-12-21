import Botao from "./components/layout/Botao.js";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";
// import Luiz from "./img/Luiz-edit.jpg";
// import Luiz1 from "./img/Luiz1.jpg";

function App() {
  return (
    <div>
      <Header />

      <Botao texto="Album do Luiz gay" idB="btnLuiz" />
      <Botao texto="Album do Arrombado do Fabio gay" idB="btnFabio" />
      <Botao texto="Album do Nagatuh FF <3" idB="btnMoises" />
      <Botao texto="Album do Nicolas Bahino Cu de aracaje ainda mais gay" idB="btnNicolas" />
      <Botao texto="Album do Lukas depressivo gay" idB="btnLukas" />

      <Footer/>
    </div>
  );
}

export default App;
