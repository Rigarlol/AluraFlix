import styles from './Card.module.css';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useVideosContext } from 'components/contextos/Videos';


export default function CardVideos({ video, onEditClick, imagem, corPrimaria }) {
    const { DeletarVideo } = useVideosContext();

    const shadowbox = {
        boxShadow: `0 0 10px ${corPrimaria}`
    }

    return (
        <div className={styles.cardvideo} style={shadowbox} >
            <div className={styles.cabecalho}>
                <img src={imagem} alt={video.titulo} />
            </div>
            <div className={styles.rodape} style={shadowbox}>
                <button className={styles.deletar} onClick={() => DeletarVideo(video.id)}>
                    <RiDeleteBinLine className={styles.ico} /> <h4>DELETAR</h4>
                </button>
                <button className={styles.editar} onClick={() => onEditClick(video)}>
                    <FaRegEdit className={styles.ico}/> <h4>EDITAR</h4>
                </button>
            </div>
        </div>
    );
}