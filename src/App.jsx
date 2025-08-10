// import { useEffect, useState } from "react"


// function App() {
//   const [state,setState]=useState(0);
//   const [seconds,setSeconds]=useState(0);
//   useEffect(()=>{
//     const interval=setInterval(()=>setSeconds((s)=>s+1),1000);
//     return()=> clearInterval(interval)
//   },[])
//   return(
//     <div>
//       <p>Count:{state}</p>
//       <p>Timer: {seconds}</p>
//       <button onClick={()=>setState(state + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App

// import React, { useState, useCallback } from 'react';

// const Button = React.memo(({ onClick, children }) => {
//   console.log("Rendering:", children);
//   return <button onClick={onClick}>{children}</button>;
// });

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [other, setOther] = useState(0);

//   // Memoized increment function
//   const increment = useCallback(() => {
//     setCount(c => c + 1);
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <Button onClick={increment}>Increment</Button>
//       <button onClick={() => setOther(other + 1)}>Re-render</button>
//     </div>
//   );
// }

// import ChildA from './ChildA';
// import ChildB from './ChildB';

// const App = () => {
//   const [users,setUsers]=useState([]);
//   const [loading,setLoading]=useState(true);
//   const[message,setMessage]=useState('')
  
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
//       setUsers(data);
//       setLoading(false)
//     })
//   })

//   return (
//     <div>
//       <ChildA setMessage={setMessage}/>
//       <ChildB message={message}/>
//       {loading?<p>Loading....</p>:users.map((user,index)=><p key={index}>{user.name}</p>)}
//     </div>
//   )
// }


// import React,{useRef} from "react";

//   const  InputFocus=()=> {
//   const inputRef = useRef(null);

//   const focusInput = () => inputRef.current.focus();

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus</button>
//     </div>
//   );
// }


  
  


// export default InputFocus

import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log("Rendering:", children);
  return <button onClick={onClick}>{children}</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Memoized increment function
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <button onClick={() => setOther(other + 1)}>Re-render</button>
    </div>
  );
}


