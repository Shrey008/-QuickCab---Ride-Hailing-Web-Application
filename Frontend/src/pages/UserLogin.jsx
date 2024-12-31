import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Quick_cab_logo from '../assets/logo/quick_cab_logo.png'
import { UserDataContext } from '../context/UserContext'
//import { Navigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState('')
    

    const { user , setUser} = useContext(UserDataContext)
    const navigate = useNavigate()
     
    const submitHandler = async(e) =>{
            e.preventDefault();
            const userData = {
                email: email,
                password: password
            }
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
             
            if(response.status === 200){
                const data = response.data
                setUser(data.user)
                localStorage.setItem('token', data.token)
                navigate('/home')
            } 
             
            setEmail('')
            setPassword('')
    }

    

  return (
    <div className='p-8 h-screen flex flex-col justify-between'>
        <div>
        <img
            className="w-24 mb-10 h-6"
            src={Quick_cab_logo}
            alt="Sample"/>

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
        <p className='text-center mt-4'>New here? <Link className='text-blue-600 font-semibold' to='/signup'>Create New Account</Link></p>
        </div>
 
        <div>
            <Link to='/captain-login' className='flex items-center justify-center w-full bg-[#134e4a] text-white py-3 rounded mt-5 font-medium'>Sign in as Captain</Link>
        </div>

    </div>
  )
}

export default UserLogin