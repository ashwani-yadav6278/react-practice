import React, { useState } from 'react'

const Collapsed = () => {
  const text=`React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components that efficiently update and render as data changes. One of React’s key features is the virtual DOM, which improves performance by minimizing direct manipulation of the actual DOM.`
  const [isExpanded,setIsExpandded]=useState(false);
  return (
    <div>
      <h1 className="title">Read More Toggle</h1>
      <p>
        <p>{isExpanded?text:`${text.substring(0,100)}....`}</p>
      </p>

      <button onClick={()=>setIsExpandded(!isExpanded)}>{
        isExpanded?"Read less":"Read more"
        }</button>
    </div>
  )
}

export default Collapsed;
