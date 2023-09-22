import Item from "./Item"

export default function List({data,toggleTodo,deleteTodo}){

    const todos= data.map((d,index)=>{
      
            if(Object.keys(d).length>0){
        
                return <Item toggleTodo={toggleTodo} key={d.id} deleteTodo={deleteTodo} todo={d} />
            }
        
        
    })
    return<>
       <ul className="list-group mb-0">
                  {todos}
                </ul>
    </>
}