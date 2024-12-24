import React from 'react'
import { Link } from 'react-router-dom'
import Quick_cab_logo from '../assets/logo/quick_cab_logo.png'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between flex-col w-full  bg-[url(https://files.oaiusercontent.com/file-XQpd34K5okM2KtzgGDBBQu?se=2024-12-22T10%3A43%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db6965b9a-179c-443b-80de-e0d2f0ad80e2.webp&sig=EswFN6eWqE1DGgQt3q6XmOmSTOqANS/1Feue6OIOJdA%3D)] bg-cover bg-bottom  '>
         
        <img
            className="w-24 h-6 opacity-1 ml-8 "
            src={Quick_cab_logo}
            alt="Sample"/>
        
        

            <div className='bg-white pb-8 py-4 px-4'>
                <h2 className=' text-[26px] font-bold'>Get Started with Quick Cab</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>

  )
}

export default Home