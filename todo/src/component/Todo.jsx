 import React ,{useState} from 'react'
 
 function Todo() {
    const [task, setTask] = useState('') //current text from input
    const [list, setList]=useState([]) //array of all task
    
    const handelChange=(e)=>{
        e.preventDefault()
        setList([...list, task]) //addid the current task to the list
        setTask("")
    }
    const handelDelete=(id)=>{
        const update=[...list]
        update.splice(id,1)
        setList(update);
    }

   return (
     <div>
        <form action="" onSubmit={handelChange}>
            <h1>Write the task</h1>
            <input type="text" placeholder="Enter your task here" maxLength={50} value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button type='submit'>done</button>
        </form>
        

        <div>
            {list.map((e,index)=>(
                <div key={index}>
                  <p>{e}</p>
                  <button onClick={()=>handelDelete(index)}>del</button>
                </div>
                
                
            ))}
        </div>
     </div>
   )
 } 
 
 export default Todo