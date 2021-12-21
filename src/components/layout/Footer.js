import {FaGithub} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    function AbrirGit() {
        window.open("https://github.com/nosdezin/", "_self");
    }

    return (
        <footer className={styles.footer}>
            <FaGithub className={styles.image} onClick={AbrirGit}/>

            <p className={styles.copy_right}><span>Edson</span> &copy; 2021</p>
        </footer>
    )
}

export default Footer