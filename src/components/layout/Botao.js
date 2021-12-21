import styles from "./Botao.module.css";

function Botao({ texto, fotos, id }) {
  function mostrar() {
  const divIMG = document.getElementById(`${id}`);

    if (divIMG.hidden === false) {
      divIMG.hidden = true;
    } else {
      divIMG.hidden = false;
    }
  }


  return (
    <div className={styles.botao_container}>
      <button type="button" onClick={mostrar}>
        {texto}
      </button>

      <div id={id} hidden>
      {fotos.map((foto) => (
        <img src={foto} alt={foto} />
      ))}
      </div>
    </div>
  );
}

export default Botao;
