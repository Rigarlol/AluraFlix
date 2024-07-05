import React, { useState } from 'react';
import { useVideosContext } from 'components/contextos/Videos';
import styles from './Modal.module.css';

export default function Modal({ video, onClose }) {
    const { AtualizarVideo } = useVideosContext();
    const [titulo, setTitulo] = useState(video.titulo);
    const [categoria, setCategoria] = useState(video.categoria);
    const [imagem, setImagem] = useState(video.imagemUrl);
    const [videoUrl, setVideoUrl] = useState(video.videoUrl);
    const [descricao, setDescricao] = useState(video.descricao);

    const handleSubmit = (e) => {
        e.preventDefault();

        const videoAtualizado = {
            id: video.id,
            titulo: titulo,
            categoria: categoria,
            imagemUrl: imagem,
            videoUrl: videoUrl,
            descricao: descricao
        };

        AtualizarVideo(video.id, videoAtualizado);
        onClose();
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2 className={styles.titulo}>EDITAR CARD:</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.campo}>
                        <label>Título:</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.campo}>
                        <label>Categoria:</label>
                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="backend">Backend</option>
                            <option value="frontend">Front-end</option>
                            <option value="dados">Dados</option>
                            <option value="mobile">Mobile</option>
                        </select>
                    </div>
                    <div className={styles.campo}>
                        <label>Imagem (URL):</label>
                        <input
                            type="text"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.campo}>
                        <label>Vídeo (URL):</label>
                        <input
                            type="text"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.campo}>
                        <label>Descrição:</label>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="submit">GUARDAR</button>
                        <button type="button" onClick={() => {
                            setTitulo('');
                            setCategoria('');
                            setImagem('');
                            setVideoUrl('');
                            setDescricao('');
                        }}>LIMPAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}