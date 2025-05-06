import React, {useState} from 'react'

function App() {
  const [task, setTask] = useState("")
  const [list, setList]=useState([])
  const handelSubmit=(e)=>{
    e.preventDefault()
    setList([...list,task])
    setTask('')
  }
  const handelDelete=(id)=>{
    const update=[...list]
    update.splice(id,1)
    setList(update)
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
          <div key={index}>
          <p>{item}</p>
          <button onClick={()=>handelDelete(index)}>-</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App