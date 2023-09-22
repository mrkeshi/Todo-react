export default function Tabs({status,changeStatus}){
    return<>
             <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
              <li onClick={()=>changeStatus('ALL')} className="nav-item" role="presentation">
                <a className={`nav-link ${status=='ALL'? 'active' : ' '}`} id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                  aria-controls="ex1-tabs-1" aria-selected="true">All</a>
              </li>
              <li onClick={()=>changeStatus('ACTIVE')} className="nav-item" role="presentation">
                <a className={`nav-link ${status=='ACTIVE'? 'active' : ' '}`} id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                  aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
              </li>
              <li onClick={()=>changeStatus('COMPLETED')} className="nav-item" role="presentation">
                <a className={`nav-link ${status=='COMPLETED'? 'active' : ' '}`} id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                  aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
              </li>
            </ul>

    </>
}