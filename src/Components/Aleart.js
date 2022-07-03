import React from 'react'

function Aleart(props) {
    const capitalize=(word) =>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
  props.aleart &&  <div className={`alert alert-${props.aleart.type} alert-dismissible fade show`} role="alert">
        <strong> { capitalize(props.aleart.type)}</strong> {props.aleart.msg}
        
    </div>
  )
}

export default Aleart
