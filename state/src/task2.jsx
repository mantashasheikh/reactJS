import { useState } from "react";
function Task2() {
  let [color, setColor] = useState()


    return (
        <>
        <div style={{ height: "100vh", backgroundColor: color }}>

       
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('yellow')}>Yellow</button>
        <button onClick={() => setColor('blue')}>Blue</button>
         </div>
        </>
    )
  }

  export default Task2