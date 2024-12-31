import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Quick_cab_logo from '../assets/logo/quick_cab_logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
const Captainlogin = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
  
    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const navigate = useNavigate()
  
  
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const captain = {
        email: email,
        password
      }
  
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
  
      if (response.status === 200) {
        const data = response.data
  
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
  
      }
  
      setEmail('')
      setPassword('')
    }

    return (
        <div className='p-8 h-screen flex flex-col justify-between'>
            <div>
            <img className="w-24 mb-10 h-6"
                        src={Quick_cab_logo}
                        alt="Sample"
                    />
    
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium mb-2'>Enter your email</h3>
                <input required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#eeeeee] mb-4 px-4 py-2 border w-full text-lg placeholder:text-base'
                type='email' 
                placeholder='email@example.com' 
                />
    
                <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
                <input required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#eeeeee] mb-4 px-4 py-2 border w-full text-lg placeholder:text-base' 
                type='password' 
                placeholder='Password' 
                />
    
                <button className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 font-medium'>Login</button>
            </form > 
            <p className='text-center mt-4'>New Captain? <Link className='text-blue-600 font-medium' to='/captain-signup'>Register as a Captain</Link></p>
            </div>
     
            <div>
                <Link to='/login' className='flex items-center justify-center w-full bg-[#d97706] text-white py-3 rounded mt-5 font-medium'>Sign in as User</Link>
            </div>
    
        </div>
      )
    }

export default Captainlogin