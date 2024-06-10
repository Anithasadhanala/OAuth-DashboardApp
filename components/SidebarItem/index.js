import { RiDashboard3Line } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const IconRender = (text) =>{
    console.log(text,"======================")
    switch(text.details){
        case "DashBoard":
            return <RiDashboard3Line className="text-white mr-4 mt-1"/>
            break
        case "Transactions":
            return <FaTags className="text-white  mr-4 mt-1"/>
            break
        case "Schedules":
            return <RiCalendarScheduleLine className="text-white  mr-4 mt-1"/>
            break
        case "Users":
            return <FaRegUserCircle className="text-white  mr-4 mt-1"/>
            break
        case "Settings":
            return <IoSettings className="text-white  mr-4 mt-1"/>
            break
        default:
            return ''
    }
}



const SidebarItem = (props) => {

    const {details} = props
    

    return(
        <div className="sidebar flex ml-20 items-center w-full mb-4">
            {IconRender({details})}
            <p className="text-white font-small text-sm">{details}</p>
        </div>
    )
}

export default SidebarItem