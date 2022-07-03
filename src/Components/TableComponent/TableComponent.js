//import React , {useState} from 'react';
//import TableDiv from './Table/Table';
import React, {useState} from 'react'
import ApplyLeave from '../ApplyLeave/ApplyLeave';


import './TableComponent.css';

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
function TableComponent(props) {
    const [searchTitle,SetSearchTitle] = useState('ee');

    const [searchResult,setSearchResult] = useState(props.details);
    
    // useEffect(()=> {
    //     alert('tilte chnaged');
    // },[title,searchResult])

    
   

    const [showform,SetVisible] = useState(false);

    const [title,changeTitle] = useState(props.title)

   
    // const headers = Object.keys(props.details[0]).map(item =>
    //     <th key={item}>{item.toUpperCase()}</th>
    // );

    const filterHandler = (e) => {
        let results;
  
        if(e.type==='change'){
        const searchText = e.target.value;
        if (searchText.length != 0) {
             results = props.details.filter(item => {
                return item.slno==searchText;
            }); 
        }}else if(e.target.value==1) {
          results=props.details.filter(item=>{
            return item.status=="Pending";
          });
        }else if(e.target.value==2) {
            results=props.details.filter(item=>{
              return item.status=="Approved";
            });
          }else if(e.target.value==3) {
            results=props.details.filter(item=>{
              return item.status=="Rejected";
            });
          }
        setSearchResult(results);
        props.showAleart("Converted to Uppercase!","success");
        
    }
    const showConfirm = (id) => {
        const result = searchResult.filter(item => {
            return item.slno === id;
        });
        alert("Name : "+result[0].name+" "+"\nstatus : "+result[0].status);
    }

    const showFormHandler = () => {
        const visible = !showform;
        SetVisible(visible);
    }

    const updateTitleHandler = () => {
        //props.title = 'updated';
        changeTitle('updated');
        props.showAleart("Title Updated!","success");
        console.log('clicked');
     
    }

    const saveHandler = (newrecord) => {
        props.onSave(newrecord);
        setSearchResult([...props.details,newrecord]);
        props.showAleart("Title Updated!","success");
        
    }

    const OnDelete=(item)=>{
      const records=props.details.filter((e)=>{
        return e!==item;
      })
      setSearchResult(records);
      props.OnDelete(records);
    }
   
    return (
        <div>
            <h1 style={{color: title === 'jk' ? 'green' : 'red'}}>JK React Course</h1>
            
            {/* <h1 className={`title ${title === 'jk' ? 'greenClass' : 'redClass'}`}>JK React Course</h1> */}
            
            {title === 'jk' ? (<><h1>{title}</h1><h1>No Update for title so far.....</h1></>) : <h1>{title}</h1> }
            <button id="hff" type="button" class="btn btn-secondary" onClick={updateTitleHandler} data-bs-toggle="popover" data-bs-placement="right"
                data-bs-custom-class="Update-Title"
               title="Click heare to update the Title"
              data-bs-content="Updated!."> Update Title</button><br/><br/>
            <button id="hff" class="btn btn-primary"  onClick={showFormHandler}>Toggle Apply Leave Form</button>
            
            {/* <button id="hff" class="btn btn-primary"  onClick={updateTitleHandler}>Update Title</button> */}
            
            
             <li className="s"></li>
             <div className='container my--3'>
             <form className="d-flex mx--2">
            <input className="searchbox" type="search"  onChange={filterHandler} placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
                    </form>
            {/* <div className='searchContainer'>
               <input type="text" onChange={filterHandler} placeholder='Search your title'  className="searchbox"/><br/>
             </div> */}
           
            <button class="btn btn-outline-primary" value={1} onClick={filterHandler}>Pending</button> <button id="app" class="btn btn-outline-success" value={2} onClick={filterHandler}>Approved</button> <button id="rej" class="btn btn-outline-danger" value={3} onClick={filterHandler}>Rejected</button>  <br/><br/>
        <table  className={`table table-striped -${props.mode==='light'?'dark':'light'}`}>
            <tr className={`table table-striped -${props.mode==='light'?'dark':'light'}`}>
                {/* {headers} <th>Action</th> */}
                <th>SL_No</th>
                <th>Name</th>
                <th>City</th>
                <th>Connection</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        {props.details.length===0?"No record to display":
         searchResult.map(item=>{
            return(
            <tr  key={item.slno}  style={{backgroundColor:item.status==="Rejected"?'red':'white'}}>
            <td >{item.slno}</td>
            <td >{item.name}</td>
            <td >{item.city}</td>
            <td>{item.connection}</td>
            <td>{item.status}</td>
            <td> {item.status==='Pending'?(<><button class="btn btn-outline-success">Accept</button> <button id="rej" class="btn btn-outline-danger">Reject</button><a onClick={() => showConfirm(item.slno)}>  View Detail</a></>):<a onClick={() => showConfirm(item.slno)} class="btn btn-outline-info">View Detail</a>}</td>
            <a>{<button onClick={()=>{OnDelete(item)}} id="rej" class="btn btn-outline-warning">Delete</button>}</a>
            </tr>
         )})}
        </table>
        {showform ? <ApplyLeave details={props.details} onSave={saveHandler} /> : ''}
        </div>
        </div>
    );
}

export default TableComponent;
