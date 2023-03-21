import React, { useState } from "react";

export const Modal = ({ handleModal, notes, setNotes, searchId }) => {

    const [newNote, setNewNote] = useState({})
    
    const handleSetNotes = () => {
        setNotes(
            [...notes,
            newNote]
        )
        handleModal()
    }

    const handleTitle = (e) => {
        e.preventDefault()
        setNewNote({
            ...newNote,
            id: e.target.value.length - Math.random(Math.floor() / 2),
            lastEdited: new Date().toString(),
            archived: false,
            [e.target.name] : e.target.value
        })
    }
    
    

    return (
        <section
            style={
                {
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    position: "fixed",
                    top: 0,
                    left: 0,
                }
            }>
            <div style={
                {
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    width: '100%',
                    height: '100%'
                }
            } />
            <form method="dialog"
                style={{
                    backgroundColor: 'white', zIndex: '1', padding: 20
                }}
            >
                <h1>Create/Edit note</h1>
                <div className="nes-field">
                    <label>Title</label>
                    <input type="text" id="name_field" className="nes-input" onChange={handleTitle} name='title'/>


                    <label htmlFor="textarea_field">Content</label>
                    <textarea id="textarea_field" className="nes-textarea" onChange={handleTitle} name='content'/>

                </div>
                <menu className="dialog-menu">
                    <button className="nes-btn" onClick={() => handleModal()}>Cancel</button>
                    <button className="nes-btn is-primary"
                    onClick={() => handleSetNotes()}
                    >Confirm</button>
                </menu>
            </form>
        </section>
    )

}
