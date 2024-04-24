import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Contexts/notes/NoteContext'
import NoteForm from './NoteForm'

function EditNote() {
    
    const { updNote, editNote }=useContext(NoteContext);
    const [newNote, setNewNote]=useState(updNote);
    useEffect(()=>{
        setNewNote(updNote);
    },[updNote])
    const onChange=(e)=>{
        if(e.target.name === 'tag') console.log(e.target.value);
        setNewNote({...newNote,[e.target.name]: e.target.value})
    }
    const saveChanges=()=>{
        // console.log
        editNote(updNote._id, newNote.title, newNote.description, newNote.tag);
        
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <NoteForm title={newNote.title} desc={newNote.description} tag={newNote.tag} onChange={onChange} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges} disabled={newNote.title.length<3 || newNote.description.length<5}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNote
