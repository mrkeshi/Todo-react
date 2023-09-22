import { useState } from "react";

export default function Item({todo,toggleTodo,deleteTodo}){

  const [checked, setChecked] = useState(todo.completed);
  const handleChange = () => {
    setChecked(!checked);
  };

return<>

  <li onClick={()=>toggleTodo(todo.id)} className="list-group-item position-relative d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
<button type="button" className="btn-close customclose" aria-label="Close" onClick={(e)=>deleteTodo(e,todo.id)}></button>

                    <input className="form-check-input me-2" type="checkbox"  checked={todo.completed}
        onChange={handleChange} aria-label="..."   />
                    {!todo.completed ? todo.title :  <s>{todo.title}</s>}
                   
                  </li>
</>
}