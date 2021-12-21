import styles from "./Botao.module.css";
//  foto  id
function Botao({ idB, texto}) {
  // function mostrar() {
    // const divIMG = document.getElementById(`${id}`);
    // const botao = document.getElementById(`${idB}`);

    // botao.addEventListener("click", () => {
    //   if (divIMG.hidden === false) {
    //     divIMG.hidden = true;
    //   } else {
    //     divIMG.hidden = false;
    //   }
    // });
  // }

  // onClick={mostrar}

  return (
    <div className={styles.botao_container}>
      <button type="button" id={idB} >
        {texto}
      </button>
    </div>
  );
}

export default Botao;
