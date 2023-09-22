import List from "./List";

export default function TabContents({status,data,toggleTodo,deleteTodo}){
    return<>
         <div className="tab-content" id="ex1-content">
              <div className={`tab-pane fade ${status === 'ALL' ? 'show active' : ''}`} id="ex1-tabs-1" role="tabpanel"
                aria-labelledby="ex1-tab-1">
                  {data &&                   <List data={data} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
 }
               
              </div>
              <div className={`tab-pane fade ${status === 'ACTIVE' ? 'show active' : ''}`} id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                <ul className="list-group mb-0">
                  {data && <List data={data.filter((obj)=>{
                  if(!obj.completed){return obj}
                })} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>}
                 

                </ul>
              </div>
              <div className={`tab-pane fade ${status === 'COMPLETED' ? 'show active' : ''}`} id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
             {data &&   <List data={data.filter((obj)=>{
                  if(obj.completed){return obj}
                })} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> }
            

              </div>
            </div>
    </>
}