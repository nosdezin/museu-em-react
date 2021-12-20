import Botao from "./components/layout/Botao.js";
import Header from "./components/layout/Header.js";
import Luiz from "./img/Luiz-edit.jpg";
// import Luiz1 from "./img/Luiz1.jpg";

function App() {
  return (
    <div>
      <Header />

      <Botao texto="Album do Luiz gay" foto={Luiz} id="divLUIZ" idB="btnLuiz" />
    </div>
  );
}

export default App;
