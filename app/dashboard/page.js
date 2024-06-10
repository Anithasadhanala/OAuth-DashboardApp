import DashBoard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';



export default function About() {
    return(
        <div className="flex w-screen h-screen bg-[#F5F5F5]">
            <div className="w-2/12 bg-slate-900 rounded-xl m-3">
                <Sidebar/>
            </div>
            <div className="w-full m-3 overflow-y-scroll">
                <DashBoard/>
            </div>
        </div>
    )
}