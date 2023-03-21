import React, { useState } from "react";
import { CardNotes } from "../CardNotes/CardNotes";
import { Modal } from "../Modal/Modal";


const api = {
    notes: {
        list: () => [
            {
                id: 'nota1',
                title: 'Jugar a la nintendo',
                lastEdited: '10/10/10',
                content: 'contenido neto',
                archived: false,
                categories: ['random'],
            },
            {
                id: 'nota2',
                title: 'Aliviar el dolor de mi corazon',
                lastEdited: '10/10/10',
                content: 'contenido neto xD',
                archived: false,
                categories: ['random'],
            }
        ]
    }
}


export const Notes = () => {

    const [notes, setNotes] = useState(api.notes.list)
    const [modal, setModal] = useState(false)
    const [searchId, setSearchId] = useState({})

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <button className="nes-btn is-primary" onClick={() => handleModal()}>Create Note</button>

            <CardNotes
                notes={notes}
                setNotes={setNotes}
                handleModal={handleModal}
            />
            {
                modal ? <Modal
                    searchId={searchId}
                    handleModal={handleModal}
                    notes={notes}
                    setNotes={setNotes}
                /> : <div />
            }

        </div>
    )
}
