import React from "react";
import { EditModal } from "../EditModal/EditModal";



export const CardNotes = ({ notes, setNotes, handleModal }) => {

    const handleArchived = (id) => {
        setNotes(notes =>
            notes.map((note) => {
                if (note.id !== id) return note

                return {
                    ...note,
                    archived: !note.archived
                }
            }))
    }


    const handleEdit = (id) => {
       
    }

    const handleDelete = (id) => {
        setNotes(notes => notes.filter(note => note.id !== id))
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, padding: '20px' }}>
            {notes.map(note => {
                return <div className="nes-container" key={note.id} >
                    <h1>{note.title}</h1>
                    <h3>Last Edited: {note.lastEdited}</h3>
                    <div>
                        <button className="nes-btn is-warning" onClick={() => handleArchived(note.id)}>Archive: {String(note.archived)}</button>
                        <button className="nes-btn is-primary" onClick={() => handleEdit(note.id)}>Edit</button>
                        <button className="nes-btn is-error" onClick={() => handleDelete(note.id)}>Delete</button>
                    </div>
                    
                </div>
            })}

            <EditModal/>
        </div>
    )
}
