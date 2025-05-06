import React, {useState} from 'react'

function App() {
  const [task, setTask] = useState("")
  const [list, setList]=useState([])
  const handelSubmit=(e)=>{
    e.preventDefault()
    setList([...list,task])
    setTask('')
  }
  const handelDelete=()=>{
    
  }

  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <h1>Enter your task</h1>
        <input type="text" placeholder='Enter your task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>add+</button>
      </form>
      <div>
        {list.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default App