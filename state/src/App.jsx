import { useState } from "react";
function App() {
  let [data, setData] = useState(0);
  // function demo(d) {
  //   alert(d);
  // }
  function demo() {
    setData("change the time");
  }
  function demo1() {
    setData(data + 1);
      
  }
  function demo2() {
    setData(data - 1);

  }

  return (
    <>
    <h1>this is app page - {data}</h1>
    {/* <button onClick={demo}>click</button>
    <button onMouseLeave={demo}> click</button> */}
    <button onClick={()=>demo("hi I am mantasha sheikh")}>click</button>
    <hr />

    <button onClick={demo} >change value</button>
    <p>{data}</p>
    <button onClick={demo1}>+</button>
    <button onClick={demo2}>-</button>
    </>
  )
}
export default App