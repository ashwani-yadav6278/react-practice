import React from 'react'

const ChildA = ({setMessage}) => {
  return (
    <div>
      <input onChange={e=>setMessage(e.target.value)} placeholder='Type Here' type="text" />
    </div>
  )
}

export default ChildA
