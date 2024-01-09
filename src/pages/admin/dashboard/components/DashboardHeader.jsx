import MainCard from "../../../../components/cards/MainCard";
import {FiCreditCard} from "react-icons/fi"
const DashboardHeader = () =>{

return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MainCard>
            <div className="flex flex-col space-y-4 p-3">
                <p>Total Report</p>
                <div className="flex flex-row justify-between">
                <p className="text-lg md:text-2xl font-bold">653</p>
                <FiCreditCard size={30} className="text-primary" />
                </div>
               
            </div>
        </MainCard>
        <MainCard>
            <div className="flex flex-col space-y-4 p-3">
                <p>Total ID Card Produced</p>
                <div className="flex flex-row justify-between">
                <p className="text-lg md:text-2xl font-bold">530</p>
                <FiCreditCard size={30} className="text-primary" />
                </div>
               
            </div>
        </MainCard>
       
    </div>
    </>
)
}
export default DashboardHeader