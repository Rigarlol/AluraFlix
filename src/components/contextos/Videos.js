import { createContext, useState, useEffect, useContext } from "react";

export const VideosContext = createContext();
VideosContext.displayName = 'Videos';

const apiUrl = 'http://localhost:3000/videos';

export function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(dados => setVideos(dados))
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }, []);

    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    );
}

export function useVideosContext() {
    const { videos, setVideos } = useContext(VideosContext);

    function AdicionarVideo(NovoVideo) {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(NovoVideo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(dados => {
            setVideos(prevVideos => [...prevVideos, dados]);
        })
        .catch(error => console.error('Erro ao adicionar vídeo:', error));
    }

    function AtualizarVideo(id, videoAtualizado) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(videoAtualizado),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(dados => setVideos(videos.map(video => video.id === id ? dados : video)))
        .catch(error => console.error('Erro ao atualizar vídeo:', error));
    }

    function DeletarVideo(id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(() => setVideos(videos.filter(video => video.id !== id)))
        .catch(error => console.error('Erro ao deletar vídeo:', error));
    }

    return {
        videos,
        AdicionarVideo,
        AtualizarVideo,
        DeletarVideo
    };
}