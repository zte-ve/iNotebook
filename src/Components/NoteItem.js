import React, { useContext } from 'react'
import NoteContext from '../Contexts/notes/NoteContext'

function NoteItem(props) {
  const { setUpdNote, deleteNote }=useContext(NoteContext);
  const { title, description, _id } = props.note;
  return (
    <div className="col-sm-3 gy-3">
      <div className="card">
        <div className="card-body" style={{
          height: "180px",
          overflowY: "hidden"
          }}>
          <div className="d-flex align-items-center">
            <h5 className="card-title mx-2">{title}</h5>
            <div className="justify-content-end">
              <i className="fa-solid fa-trash mx-2" onClick={()=>deleteNote(_id)}></i>
              <i className="fa-solid fa-user-pen mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
                setUpdNote(props.note);
              }}></i>
            </div>
          </div>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word !important'
          }}>{description}
          </pre>

          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
        <button className="btn btn-outline-primary w-50 mx-1 my-1" onClick={(e)=>{
            const p=e.target.parentNode.childNodes[0];
            if(p.style.overflowY==='hidden'){
              p.style.overflowY='scroll';
              e.target.innerText='Read less'
            }
            else{
              p.style.overflowY='hidden';
              e.target.innerText='Read More'
            }
        }}>Read More</button>
      </div>
    </div>
  )
}

export default NoteItem
