import Imagens from "./Imagens.js"

function DivImagens(props){
    return (
        <div id={props.id} hidden>
            {props.foto.lenght > 2 && (<Imagens foto={props.foto}/>)}
        </div>
    )
}

export default DivImagens