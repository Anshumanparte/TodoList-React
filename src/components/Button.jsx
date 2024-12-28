

const Button = (prompt) => {
    
    
  return (
    <button 
    onClick={prompt.func}
    className={`${prompt.color} ${prompt.text} active:scale-95 font-semibold text-center rounded-2xl ${prompt.px || "px-8"} ${prompt.py || "py-3"}`}  
    >
        {prompt.name}
        </button>
  )
}

export default Button