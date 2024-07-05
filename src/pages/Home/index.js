import CategoriaVideos from 'components/CategoriaVideos';
import Banner from 'components/Banner';
import Modal from 'components/Modal';
import { useState } from 'react';


export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [videoToEdit, setVideoToEdit] = useState(null);


    const categorias = [
        {
            nome: 'frontend',
            corPrimaria: '#6bd1ff'
        },
        {
            nome: 'backend',
            corPrimaria: '#00c86f',
        },
        {
            nome: 'mobile',
            corPrimaria: '#ffba05'
        },
        {
            nome: 'dados',
            corPrimaria: '#c429c4'
        }
    ]

    const handleEditClick = (video) => {
        setVideoToEdit(video);
        setModalOpen(true);
    };

    return (
        <>
            <Banner />

            {categorias.map(categoria => <CategoriaVideos key={categoria.nome} nome={categoria.nome} corPrimaria={categoria.corPrimaria} onEditClick={handleEditClick} />)}
            {modalOpen && (
                <Modal
                    onClose={() => setModalOpen(false)}
                    video={videoToEdit}
                />
            )}
        </>
    )
}

