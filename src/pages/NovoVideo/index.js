import React, { useState } from 'react';
import { useVideosContext } from 'components/contextos/Videos';
import style from './NovoVideo.module.css';
import Botao from 'components/Botao';

export default function NovoVideo() {
    const { AdicionarVideo } = useVideosContext();
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoVideo = {
            titulo: titulo,
            categoria: categoria,
            imagemUrl: imagem,
            videoUrl: video,
            descricao: descricao
        };

        AdicionarVideo(novoVideo);
        limparCampos();
    };

    const limparCampos = () => {
        setTitulo('');
        setCategoria('');
        setImagem('');
        setVideo('');
        setDescricao('');
    };

    return (
        <div className={style.containner}>
            <div className={style.container__titulo}>
                <h1 className={style.titulo}>
                    NOVO VÍDEO
                </h1>
                <h2 className={style.subtitulo}>
                    COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO
                </h2>
            </div>
            <div className={style.containner__form}>
                <h3 className={style.titulo__form}>
                    Criar Card
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label>Título:</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder='Digite o título do vídeo'
                            required
                        />
                    </div>
                    <div className={style.formGroup}>
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
                    <div className={style.formGroup}>
                        <label>Imagem (URL):</label>
                        <input
                            type="text"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            required
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label>Vídeo (URL):</label>
                        <input
                            type="text"
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                            required
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label>Descrição:</label>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>
                    <div className={style.botoes}>
                        <Botao tipo='submit'>GUARDAR</Botao>
                        <Botao tipo='button' onClick={limparCampos}>LIMPAR</Botao>
                    </div>
                </form>
            </div>
        </div>
    );
}
