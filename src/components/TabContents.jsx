import List from "./List";

export default function TabContents({status,data,toggleTodo}){
    return<>
         <div className="tab-content" id="ex1-content">
              <div className={`tab-pane fade ${status === 'ALL' ? 'show active' : ''}`} id="ex1-tabs-1" role="tabpanel"
                aria-labelledby="ex1-tab-1">
                  <List data={data} toggleTodo={toggleTodo}/>
               
              </div>
              {/* <div className={`tab-pane fade ${status === 'ACTIVE' ? 'show active' : ''}`} id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                <ul className="list-group mb-0">
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Morbi leo risus
                  </li>
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Porta ac consectetur ac
                  </li>
                  <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Vestibulum at eros
                  </li>
                </ul>
              </div>
              <div className={`tab-pane fade ${status === 'COMPLETED' ? 'show active' : ''}`} id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                <ul className="list-group mb-0">
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                    <s>Cras justo odio</s>
                  </li>
                  <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                    style={{backgroundColor: '#f4f6f7'}}>
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                    <s>Dapibus ac facilisis in</s>
                  </li>
                </ul>
              </div> */}
            </div>
    </>
}