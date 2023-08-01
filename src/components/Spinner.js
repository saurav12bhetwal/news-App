import React from 'react'
import loading from "./5.gif"
  const Spinner=()=>{
    return (
      <div className='text-center'style={{margin:"100px"}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner
