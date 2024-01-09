// import React from 'react'
const IMG_PATH ='/img/logo/'
const HeaderLogo = () => {
  return (
    <div className="py-2">
        <img className="w-40 h-12   md:w-60 md:h-20" src={`${IMG_PATH}logo-fud.png`} alt="logo"/>
    </div>
  )
}

export default HeaderLogo