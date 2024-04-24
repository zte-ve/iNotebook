import React, { useContext, useEffect } from 'react'
import NoteContext from '../Contexts/notes/NoteContext'
import NoteItem from './NoteItem'
import { useNavigate } from 'react-router-dom';
import AlertContext from '../Contexts/alerts/AlertContext';

function Notes() {
    let navigate=useNavigate();
    const { notes, getNotes } = useContext(NoteContext);
    const { setAlertFun } = useContext(AlertContext);
    useEffect(() => {
        if(localStorage.getItem('token'))   getNotes();
        else{
            setAlertFun('Pls, login first to see any notes!','info')
            navigate('/signIn');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <h2>Your Notes :</h2>
            <div className="row">
                <div className="container fs-5 fw-bold">
                    {notes.length === 0 && "You have not created any notes yet!! 🙂"}
                </div>
                {notes && notes.map((note, ind) => {
                    return <NoteItem key={ind} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
