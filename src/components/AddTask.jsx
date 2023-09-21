export default function AddTask({text,HandelText,addTask}){
    return <>
       <form className="d-flex justify-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <input value={text} onChange={(e)=>HandelText(e)} type="text" id="form2" className="form-control" />
                <label className="form-label" htmlFor="form2">New task...</label>
              </div>
              <button onClick={(e)=>addTask(e)} type="submit"  style={{marginBottom:'30px'}} className="btn btn-info ms-2">Add</button>
            </form>
    </>
}