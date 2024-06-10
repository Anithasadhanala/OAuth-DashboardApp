import { GiReceiveMoney } from "react-icons/gi";

const DashBoardItem = (props) => {

    const {details} = props;
    const {text,number,color} =details
    console.log(text,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

    const style ="bg-["+color+ "] w-[220px] h-[120px] flex flex-col py-4 px-5 justify-between rounded-2xl"

    console.log(style+"-----------------------------------------------------------")

    return(
        <div className={style}>
            <div className=" flex justify-end " >
                <GiReceiveMoney size={26} />
            </div>
            <div className="" >
                <p className="font-normal text-sm" >{text}</p>
                <p className="font-bold text-2xl"  >{number}</p>
            </div>
        </div>
    )
}

export default DashBoardItem