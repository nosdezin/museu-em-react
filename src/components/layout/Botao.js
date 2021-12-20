import styles from "./Botao.module.css";
import DivImagens from "../DivImagens.js";

function Botao(props) {
  function mostrar() {
    const divIMG = document.getElementById(`${props.id}`);
    const botao = document.getElementById(`${props.idB}`);

    botao.addEventListener("click", () => {
      if (divIMG.hidden === false) {
        divIMG.hidden = true;
      } else {
        divIMG.hidden = false;
      }
    });
  }

  return (
    <div className={styles.botao_container}>
      <button type="button" id={props.idB} onClick={mostrar}>
        {props.texto}
      </button>

      <DivImagens id={props.id} foto={props.foto} />
    </div>
  );
}

export default Botao;
