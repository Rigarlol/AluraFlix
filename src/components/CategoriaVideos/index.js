import styles from './CategoriaVideos.module.css';
import CardVideos from 'components/Card';
import { useVideosContext } from '../../components/contextos/Videos';


export default function CategoriaVideos({ nome, corPrimaria, onEditClick }) {

    const { videos } = useVideosContext();

    const css = { 
        backgroundColor: corPrimaria,
    }
    
    return (
        (videos.length > 0) ?
            <section className={styles.container}>
                <h2 className={styles.categoria} style={css}>{nome.toUpperCase()}</h2>
                <div className={styles.video} >
                    {videos.filter(video => video.categoria === nome).map(video => (
                        <CardVideos key={video.id} video={video} onEditClick={onEditClick} corPrimaria={corPrimaria}/>
                    ))}
                </div>
            </section>
            : ''
    )
}

