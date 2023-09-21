import Item from "./Item"

export default function List({data,toggleTodo}){

    const todos= data.map((d)=>{
        return <Item toggleTodo={toggleTodo} key={d.id} todo={d} />
        
    })
    return<>
       <ul className="list-group mb-0">
                  {todos}
                </ul>
    </>
}