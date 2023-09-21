import { useState } from "react";
import AddTask from "./components/AddTask";
import Tabs from "./components/Tabs";
import TabContents from "./components/TabContents";

export default function Todo(){
    const [todos,setTodos]=useState([{
        id:1,
        title:'search',
        completed:false
    }])
    const [status,setStatus]=useState('ALL')
    const [text,setText]=useState('')
    function addTask(e){
        e.preventDefault()
        setTodos((state)=>{
            return[{title:text,type:false,id:state.length+1},...state]
        })
        setText('')
    }
    function HandelText(e){
    setText(e.target.value)
    }
    function toggleTodo(id){
      setTodos((state)=>{
        return state.map((todo)=>{
          if(todo.id!==id){
            return todo
          }
          return{
            ...todo,
            completed:!todo.completed
          }
        })
      })
    }
    return<>
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card">
          <div className="card-body p-5">

         <AddTask text={text} HandelText={HandelText} addTask={addTask}/>
         <Tabs/>


       <TabContents status={status} data={todos} toggleTodo={toggleTodo}/>
    

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
}