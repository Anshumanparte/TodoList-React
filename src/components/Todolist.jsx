import { useState } from "react"
import Button from "./Button"

const Todolist = (prompt) => {
    const [editingvalue, seteditingvalue] = useState('')
    const [editindx, seteditindx] = useState(null)
    
    const checked = (idx)=>{
        const newlist = prompt.lists.map((elem,i)=>{
            return i == idx ?{...elem,status: !elem.status} : elem
        })
        prompt.setlists(newlist)
        prompt.tosavelist(newlist)
    // console.log(prompt.item.status);
    }

    
    const deleteHandler =(i)=>{
        
        const newarr = [...prompt.lists]
        newarr.splice(i,1);
        prompt.setlists(newarr)
        prompt.tosavelist(newarr)
    }
    
    const editHandler = (idx)=>{
            
            seteditindx(idx)
            seteditingvalue(prompt.lists[idx].text)
    }
    const savelist = (idx)=>{
        const newarr = prompt.lists.map((elem,i)=>{
                return i == idx ?{...elem,text: editingvalue} : elem
        })
        prompt.setlists(newarr)
        seteditindx(null)
        prompt.tosavelist(newarr)
    }
    
    

  return ( 


  
        <div
        className={`${
            prompt.item.status
            ? "flex justify-between items-center text-xl sm:text-xl mt-2 border-2 p-2 bg-green-600 text-black border-gray-400 flex-wrap gap-4 max-w-full  rounded-xl"
            : "flex justify-between items-center  text-xl sm:text-xl mt-2 border-2 p-2 text-gray-200 flex-wrap border-gray-400 max-w-full gap-4  rounded-xl"
        }`}
        >   {editindx != prompt.idx ?(
        <li
            
            className={`${
                prompt.item.status
                ? "line-through min-w-20 list-none flex flex-wrap text-xl sm:text-xl"
                : "flex flex-wrap list-none text-xl sm:text-xl"
            }`}
            onClick={()=>{checked(prompt.idx)}}
        >
            {prompt.idx + 1}. {prompt.item.text}
        </li>
        ):(
            <input
                  type="text"
                  value={editingvalue}
                  onChange={(e) => seteditingvalue(e.target.value)}
                  className="border border-gray-400 text-black min-w-full px-2 py-1 rounded-xl"
                />
        )

        }
            
            <div className="flex items-center  gap-3 ">
                { editindx == prompt.idx?(
                    <>
                    <Button 
                        func={()=>savelist(prompt.idx)}
                        name="Save" px="px-3" color="bg-purple-700" py="py-1" />

                    <Button 
                        func={()=>seteditindx(null)}
                        name="Cancel" px="px-3" color="bg-purple-700" py="py-1" />
                    </>

                ):(
                    <>
                        <Button 
                        func={()=>editHandler(prompt.idx)}
                        name="Edit" px="px-3" color="bg-purple-700" py="py-1" />

                        <i
                        onClick={() => deleteHandler(prompt.idx)}
                        className="ri-delete-bin-5-line text-red-600 cursor-pointer hover:text-red-800"
                        ></i>
                    </>
                )
                    
                }
                
            </div>
        </div>

  )
}

export default Todolist