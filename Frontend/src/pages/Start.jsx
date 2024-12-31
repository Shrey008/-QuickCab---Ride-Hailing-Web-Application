import React from 'react'
import { Link } from 'react-router-dom'
import Quick_cab_logo from '../assets/logo/quick_cab_logo.png'
import Traffic_light_img from '../assets/images/Traffic_light.jpg'

const Start = () => {
  return (
    <div
        className="h-screen pt-8 flex justify-between flex-col w-full bg-cover bg-bottom"
        style={{ backgroundImage: `url(${Traffic_light_img})` }}
      >
         
        <img
            className="w-24 h-6 opacity-1 ml-8 "
            src={Quick_cab_logo}
            alt="Sample"/>
        
        

            <div className='bg-white pb-8 py-4 px-4'>
                <h2 className=' text-[26px] font-bold'>Get Started with Quick Cab</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
         
    </div>

  )
}

export default Start