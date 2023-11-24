import React from 'react'
import Link from 'next/link';


function Banner() {
  const customStyle = {
    backgroundColor: 'rgba(225, 195, 0, 1)',
  }
    return (

    <div className="announcement-bar text-center w-full p-3 text-xs font-semibold " style={customStyle}>
      <Link href='/'>VISIT US IN TIKTOK @BRAVALAND.com</Link>
     
      </div>
      )
}

export default Banner
