export function Searchbar() {
    return (
        <div className="border w-1/2 border-slate-200 rounded-full overflow-hidden">
            <input 
                type="text" 
                placeholder="Search course.." 
                className="px-4 py-2 w-1/2 right-56  focus:outline-none focus:ring-2 "
            />
        </div>
    );
}
