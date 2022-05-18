import React, { useState } from 'react'

const Searchpost = () => {
    var [name,setName]=useState("Sruthy")
    const changeName=()=>{
        setName(
            name="Appu"
        )
    }
  return (
    <div>
        {name}
<button onClick={changeName} className='btn btn-success'>CHANGE</button>

    </div>
  )
}

export default Searchpost