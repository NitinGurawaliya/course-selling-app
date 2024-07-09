export function InputBox({onChange,label,placeholder}){
    return <div>
        <div className="flex justify-start mt-3 md-2 ">
            {label}
        </div>
   
        <div>
        

        <input onChange={onChange} placeholder={placeholder} className="px-1 border-2   py-1 w-full border-green-400 rounded-lg" />

        </div>
        
       
    </div>
} 