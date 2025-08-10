import React, { useState } from 'react'
import '../css/TabSwitcher.css'
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];
const TabSwitcher = () => {
    const [active,setActive]=useState("home");

  return (
    <div className='tab-switcher'>
      <h1>Tab Switcher</h1>
      <div className='tab-buttons'>
        {tabs.map((btn,index)=>(
            <button className={active===btn.id?"active":""} onClick={()=>setActive(btn.id)}>{btn.label}</button>
        ))}
      </div>
      <div className='tab-content'>
        {tabs.find((tab)=>tab.id==active).content}
      </div>
    </div>
  )
}

export default TabSwitcher;
