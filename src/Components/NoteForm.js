import React from 'react'

function NoteForm(props) {
    const { title, desc, tag, onChange }=props;
    return (
        <div >
            <form className="my-3 ">
                <div className="form-group">
                    <label htmlFor="title">Note Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="noteHelp" placeholder="Enter a valid Title" value={title} onChange={onChange} required={true} />
                    {/* <small id="noteHelp" className="form-text text-muted">{`${title ? title : 'Please enter a valid note!'}`}</small> */}
                    <small id="noteHelp" className="form-text text-muted">At least contain 3 letters</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Note Description</label>
                    {/* <input type="text" className="form-control" id="description" name="description" placeholder="Enter a valid Description" value={desc} onChange={onChange} required  /> */}
                    <pre><textarea className="form-control" rows='4' id="description" name="description" placeholder="Enter a valid Description" value={desc} onChange={onChange} required ></textarea></pre>
                    <small id="noteHelp" className="form-text text-muted">At least contain 5 letters</small>
                </div>
                <hr />
                <div className="container my-3">
                    <label htmlFor="tag">Note Tag</label>
                    <select id="tag" name="tag" className="form-control form-control-sm" value={tag} onChange={onChange}>
                        Select tag for a Note:
                        <option></option>
                        <option>General</option>
                        <option>Personal</option>
                        <option>Educational</option>
                        <option>Health</option>
                        <option>Professional</option>
                        <option>Entertaintment</option>
                    </select>
                    <small id="optional" className="form-text text-muted">(optional)</small>
                </div>
        </form>
        </div>
    )
}

export default NoteForm
