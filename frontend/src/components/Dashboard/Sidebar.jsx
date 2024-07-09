
import Dashnav from "./Dashnav"
import {Button} from "../Signup/Button"

export function Sidebar() {

    return (
        <>
            <div className="fixed overflow-auto  px-0 top-16 bottom-0 left-0 bg-blue-100 w-60 flex m-0 flex-col space-y-8 p-4">

            <SidebarButton  label={"Home"} />
            <SidebarButton label={"Courses"} />
            <SidebarButton label={"Purchases"} />
            <SidebarButton label={"Wishlist"} />
            <SidebarButton label={"Logout"} />
                
            </div>
        </>
    );
}

function SidebarButton({label}){
    return <div className="text-4xl m-0 p-0  font-bold ">
    <Button label={label} />
    </div>


}