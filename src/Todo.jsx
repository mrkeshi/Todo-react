import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tabs from "./components/Tabs";
import TabContents from "./components/TabContents";

export default function Todo(){

  useEffect(()=>{
    const olddata=localStorage.getItem('todos')
    if(olddata != ''){
   
      setTodos(JSON.parse(olddata))
    }
  },[])
    const [todos,setTodos]=useState([{}])
    const [status,setStatus]=useState('ALL')
    const [text,setText]=useState('')
    function addTask(e){
        e.preventDefault()
        if(text.trim() !=' ' && text.trim() !=''){
          
          setTodos((state)=>{
           
            return[{title:text,type:false,id:Date.now()},...state]
            
        })

        }
       
        setText(' ')
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
    function deleteTodo(e,id){
      e.stopPropagation()
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
   
    }
    function changeStatus(status){
      setStatus(status)
    }
    useEffect(()=>{
      if(todos.length>0){
        localStorage.setItem("todos",JSON.stringify(todos));
  
      }
    },[todos])
    return<>
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card">
          <div className="card-body p-5">

         <AddTask text={text} HandelText={HandelText} addTask={addTask}/>
         <Tabs changeStatus={changeStatus} status={status}/>


       <TabContents status={status} data={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
}