import React, { useState } from 'react';

function ProgressBar() {
    const [increse, setIncrease] = useState(0);
    const updateprogressbar = (delta) => {
        setIncrease(prev => Math.max(0, Math.min(100, prev + delta)));
    }

    const getColor = () => {
        if (increse >= 80) return "green";
        if (increse >= 40) return "orange";
        return "red";
    }
    return (
        <div style={{maxWidth:"400px", margin:"auto",padding:"1.25rem"}}>
            <h2>Progress bar</h2>
            <div style={{
                backgroundColor: "#ddd", height: "1.75rem", borderRadius: "0.5rem",
                overflow: "hidden",
                position:"relative",
                margin: "1rem"
            }}>
                <div style={{ width: `${increse}%`, height: "100%", background: getColor(), transition: "width 0.3s ease-in-out" }} id="testBgColor" />
                <span style={{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",color:"#fff",fontWeight:"bold"}}>{increse}% </span>

            </div>
                <div style={{marginTop:"10px"}}>
                <button onClick={()=>updateprogressbar(-10)}>-10%</button>
            
                <button onClick={() => updateprogressbar(+10)} style={{ marginLeft: "10px" }}>+10%</button>
    </div>
        </div>
      
    );
}

export default ProgressBar;
