import React, { useContext, useState } from 'react'
import NoteContext from '../Contexts/notes/NoteContext'
import NoteForm from './NoteForm';

function AddNote() {
    const { addNote }=useContext(NoteContext);
    const [newNote, setNewNote]=useState({title: "", description: "", tag: ""});
    const onChange =(e)=>{
        const x=e.target.value.trimStart();
        setNewNote({...newNote,[e.target.name]: x})
    }
    const handleClick =(event)=>{
        event.preventDefault();
        // const x=newNote.title.trim();
        // const y=newNote.description.trim();
        // setNewNote({...newNote,"title": x, "description": y})
        addNote(newNote.title,newNote.description,newNote.tag);
        setNewNote({title: "", description: "", tag: ""});
    }
    return (
        <div className="container my-3">
        <h2 className='mt-5'>ADD YOUR NOTES</h2>
        <NoteForm onChange={onChange} title={newNote.title} desc={newNote.description} tag={newNote.tag}  />
        <form>
            <input type="submit" className="btn btn-primary" onClick={handleClick} disabled={newNote.title.length<3 || newNote.description.length<5} />
        </form>
        </div>
    )
}

export default AddNote
