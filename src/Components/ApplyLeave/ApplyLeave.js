import React , {useState } from 'react';

function ApplyLeave(props) {
    
    // const [name,setname] = useState('');
    // const [city,setcity] = useState('');
    // const [connection,setconnection] = useState('');

    const [records , setRecords] = useState({
        name:"",
        city:"",
        connection: "",
    })

    // const nameHandler = (event) => {
    //     // setRecords({
    //     //     ...records,
    //     //     name: event.target.value
    //     // });
    //        
    //     // setRecords((oldState) => {
    //     //     return {...oldState,name: event.target.value}
    //     // })
    
    //     setname(event.target.value);
    //    // console.log(event.target.value);
    // }

    // const cityHandler = (event) => {
    //     // setRecords((oldState) => {
    //     //     return {...oldState,city: event.target.value}
    //     // })
    //    setcity(event.target.value);
    //     //console.log(event.target.value);
    // }

    // const connectHandler = (event) => {
    //     // setRecords((oldState) => {
    //     //     return {...oldState,connection: event.target.value}
    //     // })
    //    setconnection(event.target.value);
    //     //console.log(event.target.value);
    // }

    const handleAddFormChange=(event)=>{
        event.preventDefault();
    
        const fieldname=event.target.getAttribute('name');
        const value=event.target.value;
        const newformdata={...records};
        newformdata[fieldname]=value;
        setRecords(newformdata);

      }

    const submitHandler = (event) => {
        event.preventDefault();
        let slno;
       records.slno= props.details.length===0?1:props.details[props.details.length-1].slno+1;
        records.status="Pending";
       
         props.onSave(records);
         event.target[0].value='';
         event.target[1].value='';
         event.target[2].value='';
         props.showAleart("Converted to Uppercase!","success");
    //    setname('');
    //    setcity('');
    //    setconnection('');
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label  for="name">name</label>
                {/* <input type="number" value={userId} onChange={userIdHandler}  /> */}
                <input name="name" type="text"   onChange={handleAddFormChange}  />
            </div>
            <div className='form-control'>
                <label for="city">city</label>
                <input name="city" type="text"   onChange={handleAddFormChange}/>
            </div>
            <div className='form-control'>
                <label for="connection">connection</label>
                <input name="connection" type="text"  onChange={handleAddFormChange} />
            </div>
            <button id="hff" type="submit" class="btn btn-primary">Add Data</button>
            {/* <button  id="hff" type="submit" class="btn btn-outline-primary">Primary</button> */}
            {/* <button id="hff" type="submit">Add Data</button> */}
        </form>
    );
}

export default ApplyLeave;