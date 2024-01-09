import React from 'react'
import { Bars3Icon} from '@heroicons/react/24/outline';
const MenuIcon = ({toggleSidebar}) => {
  return (
    <> <Bars3Icon onClick={toggleSidebar}  className="text-primary w-6 h-6 cursor-pointer"/></>
  )
}

export default MenuIcon