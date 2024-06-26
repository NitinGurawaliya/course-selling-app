import {Link} from "react-router-dom"

export function BottomWarning({label,buttonText,to}){
    return <div className="flex text-sm justify-center mt-3">
        <div>
            {label}
        </div>

        <Link className="mx-2 underline cursor-pointer" to={to}>
        {buttonText}
        </Link>
    </div>


}