import { useEffect, useState } from 'react'

import './App.css'
 
import Todoinput from './components/Todoinput'

import Todolist from './components/Todolist'



function App() {
  const [lists, setlists] = useState([]);
  const [name, setname] = useState('')
  const [status, setstatus] = useState(false)


   // Load todos from local storage on component mount
   useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    
      setlists(savedTodos);
    
  }, []);

 

  const tosavelist = (temp)=>{
    localStorage.setItem('todos', JSON.stringify(temp));
  }





  const submitHandler = (e)=>{
          e.preventDefault()
          if(name.trim() != ''){
            const temp = [...lists,{text: name,status}]
            setlists(temp)
            tosavelist(temp)
          }
          setname('')
          setstatus(false)
         
          
  }
  
  

 
 

  return (
    <>
      <div className='main-container min-h-screen w-full flex justify-center items-start p-10 bg-zinc-900'>
            <div className='main-block w-80 sm:w-3/4 lg:w-1/2'>
                  <Todoinput subbtn={submitHandler} setname={setname} name={name} />
                  <h1 className='text-4xl mb-2 text-gray-300 font-semibold '>
                    TODO-LIST
                    </h1>
                  <hr />
                  {lists.map((elem,idx)=>{
                    return (
                      <Todolist item={elem}  key={idx} idx={idx} lists={lists} setname={setname} setlists={setlists} tosavelist={tosavelist} />
                    )
                  })}
            </div>
      </div>
        
    </>
  )
}

export default App
