import styles from './Botao.module.css';

function Botao(props){
    function mostrar()
    {
        const divIMG = document.getElementById(`${props.id}`)
        const botao = document.getElementById(`${props.idB}`)
        let booleanC = true
        
        botao.addEventListener("click", () => {
            if(booleanC === false){
                booleanC = true
                divIMG.hidden = booleanC
            }else{
                booleanC = false
                divIMG.hidden = booleanC
            }
        })
    }

    return(
        <div className={styles.botao_container}>
            <button type='button' id={props.idB} onClick={mostrar}>
                {props.texto}
            </button>

            <div id={props.id} hidden>
                <img src={props.foto} alt={props.foto}/>
            </div>
        </div>
    )    
}

export default Botao