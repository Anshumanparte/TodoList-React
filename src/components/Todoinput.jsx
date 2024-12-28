
import Button from "./Button"

const Todoinput = (prompt) => {

    

  return (
    //inpput container
    <div className=" mb-3">
        <form 
        onSubmit={(e)=>prompt.subbtn(e)}
        className="flex flex-col gap-2 lg:flex-row min-w-full " >
        <input 
        placeholder="Enter your task...."
        value={prompt.name}
        onChange={(e)=>prompt.setname(e.target.value)}
        className="rounded-2xl text-lg w-full px-2 py-2 border-2 border-black outline-none"
        type="text" />
        <Button 
        name="Add" 
        color="bg-blue-500" 
        text="text-white" />
        </form>
    </div>
  )
}

export default Todoinput