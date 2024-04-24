import React, { useContext, useState } from "react";
import NoteContext from "./NoteContext";
import AlertContext from "../alerts/AlertContext";

const NoteState = (props) => {
  const { setAlertFun } = useContext(AlertContext)
  const host="http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  const [updNote, setUpdNote] = useState({title: "", description: "", tag: ""}); // updNote will  hold the note object that is to be updated

  // function to fetch a Note
  const getNotes = async () => {
    // call the backend API for fetching all notes of the logged in user and update the front end accordingly
    // API CALL GET request
    const url=`${host}/api/notes/getAllNotes`;
    const response= await fetch(url,{
      method: "GET",
      headers: {
        'auth-token':localStorage.getItem('token'),
        'Content-Type': "application/json"
      }
    });
    const res=await response.json();
    console.log("all notes of the user fetched with response ");

    // logic to add in frontend is done using notes state of context
    setNotes(res);
  }

  // function to add a Note
  const addNote = async (title, description, tag) => {
    // call the backend API for adding the note and update the front end accordingly
    // API CALL POST request
    if(tag.length===0) tag='General';
    const url=`${host}/api/notes/addNote`;
    const data={title, description, tag};
    const response= await fetch(url,{
      method: 'POST',
      headers: {
        'auth-token':localStorage.getItem('token'),
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
    const res=await response.json();
    console.log("note added ");
    // logic to add in frontend
    setNotes(notes.concat(res));
    setAlertFun('Your Note is added successfully!', 'success')
  }

  // function to delete a Note
  const deleteNote = async (id) => {
    // call the backend API for deleting the note and update the front end accordingly
    // API CALL del request
    const url=`${host}/api/notes/deleteNote/${id}`;
    console.log('note  deleted with id ',id,url);
    await fetch(url,{
      method: 'DELETE',
      headers: {
        'auth-token':localStorage.getItem('token'),
        'Content-Type': "application/json"
      }
    })
    // const res=await response.json();
    console.log("note deleted");
    
    // logic to delete in frontend
    const newNote = notes.filter((note) => {
      return note._id !== id;
    })
    setNotes(newNote);
    setAlertFun('Your Note is deleted successfully!', 'success')
  }

  // function to edit a Note
  const editNote = async (id, title, description, tag) => {
    // call the backend API for editing the note and update the front end accordingly
    // API CALL put request
    console.log("editting of note started!");
    const url=`${host}/api/notes/updateNote/${id}`;
    await fetch(url,{
      method: 'PUT',
      headers: {
        'auth-token':localStorage.getItem('token'),
        'Content-Type': "application/json"
      },
      body: JSON.stringify({title, description, tag})
    })
    // const res=await response.json();
    console.log("note updated ");

    // logic to update in frontend
    const newNotes = [];
    for (let i = 0; i < notes.length; i++) {
      let ele = notes[i];
      if (ele._id === id) {
        ele.title = title;
        ele.description = description;
        ele.tag = tag;
      }
      newNotes.push(ele);
    }
    setNotes(newNotes);
    setAlertFun('Your Note is updated successfully!', 'success')
  }

  return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, updNote , setUpdNote}}>
    {props.children}
  </NoteContext.Provider>
}

export default NoteState;                                                                                 