import { useEffect, useRef, useState } from 'react'

import './App.css'
 
import Todoinput from './components/Todoinput'

import Todolist from './components/Todolist'



function App() {
  const [lists, setlists] = useState([]);
  const [name, setname] = useState('')
  const [status, setstatus] = useState(false)
  const growthRef = useRef(null)

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
  

  const completedtask = lists.filter((elem)=>{
      return elem.status
    })
  
  // console.log(completedtask);
  useEffect(()=>{
      growthRef.current.style.width=completedtask.length?`${(completedtask.length/lists.length)*100}%`:`0%`;
  },[completedtask,lists])

 
 

  return (
    <>
      <div className='main-container min-h-screen w-full flex justify-center items-start p-10 bg-zinc-900'>
            <div className='main-block  w-80 sm:w-3/4 lg:w-1/2'>
                  <Todoinput subbtn={submitHandler} setname={setname} name={name} />
                  <div className='flex mb-3 flex-col md:flex-row md:justify-between md:items-end'>
                    <h1 className='text-3xl md:text-4xl mb-2 text-gray-300 font-semibold '>
                    TODO-LIST
                    </h1>
                    <div className='md:w-2/5 md:text-end'>
                      <h1 className='text-2xl md:text-3xl mb-2 text-gray-300 font-medium ' >
                      Completed - 
                      <span className={completedtask.length==0?`text-red-400`: completedtask.length==lists.length?`text-green-400`:`text-gray-300`}> 
                        {` ${completedtask.length}`}
                      </span>
                      {`/${lists.length}`}

                    </h1>

                    <div className='h-2 w-full bg-gray-300 overflow-x-hidden rounded-2xl'>
                      <div 
                      ref={growthRef}
                      className='bg-green-500  h-2'>

                      </div>
                    </div>
                      
                    </div>
                    

                  </div>
                  
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
