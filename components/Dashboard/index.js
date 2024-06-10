import React from 'react'
import DashBoardItem from '../DashboardItem'
import Navbar from '../Navbar'
import Chats from '../Charts'



const dashboardItems = [
    {
        "text": "Total Revenues",
        "number": "2,129,430",
        "color":"#ECFFDC"
    },
    {
        "text": "Total Transactions",
        "number": "1,520",
        "color": "#FFFFED"
    
    },
    {
        "text": "Total Likes",
        "number": "9,721",
        "color": "#FF474C"
    },
    {
        "text": "Total Revenues",
        "number": "892",
        "color": "#F0FFFF"
    },

]


const DashBoard = () => {
  return (
    <div className=" w-full h-full flex flex-col" >  
        <Navbar/>
        <div className="flex justify-between" >

            {
                dashboardItems.map((each,index)=> <DashBoardItem key={index} details={each}/>)
            }
           
        </div>
        <Chats/>
    </div>
  )
}

export default DashBoard
