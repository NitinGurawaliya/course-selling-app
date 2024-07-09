export function Button({ onClick, label }) {
    return (
        <button 
            onClick={onClick} 
            type="button" 
            className="mt-3  text-black w-full h-8 rounded-lg  text-sm hover:bg-green-400 active:bg-slate-50 active:text-black"
        >
            {label}
        </button>
    );
}
