// import React from 'react'
const IMG_PATH ='/img/logo/'
const Logo = () => {
  return (
    <div className="py-5">
        <img className="w-80 h-24" src={`${IMG_PATH}logo-fud.png`} alt="logo"/>
    </div>
  )
}

export default Logo