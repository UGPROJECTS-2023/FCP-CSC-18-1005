import { Link } from 'react-router-dom';
import SubmitButton from '../../components/controls/SubmitButton';
import {VscError} from "react-icons/vsc"
const NotFound = () => {
  return (
    <div className="max-w-[1000px] h-screen mx-auto mt-40">
        <div className="flex flex-col justify-center items-center space-y-5">
            <VscError className="text-red-600 " size={120} />
            <p className="text-dark text-xl">Page Not Found</p>
           <div className='mx-auto px-20'>
          <Link to="/dashboard">
          <SubmitButton>
                Go Back Home
        </SubmitButton>
          </Link>
           </div>
        </div>
    </div>
  )
}

export default NotFound