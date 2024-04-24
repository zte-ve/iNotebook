import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'
import EditNote from './EditNote'

function Home() {
  return (
    <>
      <AddNote />
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Launch demo modal
      </button> */}
      {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch modal</button> */}
      <EditNote />
      <div className="container"><Notes /></div>
    </>
  )
}

export default Home
