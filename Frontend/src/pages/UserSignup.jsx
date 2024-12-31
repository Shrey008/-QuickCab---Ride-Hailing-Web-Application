import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Quick_cab_logo from '../assets/logo/quick_cab_logo.png'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [userData,setUserData] = useState({}) 

    const navigate = useNavigate();

    const { user, setUser} = useContext(UserDataContext)

    const submitHandler = async(e) => {
        e.preventDefault();
         const newUser = {
            fullname:{
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,  
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
        if(response.status === 201){
            const data = response.data

            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')

        }
        

        setEmail('');
        setFirstName('')
        setLastName('')
        setPassword('');
    };
    
  return (
    <div>
    <div className='p-8 h-screen flex flex-col justify-between'>
        <div>
        <img
            className="w-24 mb-10 h-6"
            src={Quick_cab_logo}
            alt="Sample"/>

        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            

            <h3 className='text-lg font-medium mb-2'>Enter your name</h3>
            <div className='flex gap-2 '>
                <input required
                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border  text-base placeholder:text-base'
                type='text' 
                placeholder='First Name'
                value={firstName} 
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}
                />
                <input required
                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border  text-base placeholder:text-base'
                type='text' 
                placeholder='Last Name'
                value={lastName} 
                onChange={(e)=>{
                    setLastName(e.target.value)
                }} 
                />
            </div>

            <h3 className='text-lg font-medium mb-2'>Enter your email</h3>
            <input required
            className='bg-[#eeeeee] mb-3 px-4 py-2 border w-full  text-base placeholder:text-base'
            type='email' 
            placeholder='email@example.com' 
            value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />

            <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
            <input required 
            className='bg-[#eeeeee] mb-3 px-4 py-2 border w-full text-base placeholder:text-base' 
            type='password' 
            placeholder='Password' 
            value={password} 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />

            <button className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 font-medium'>Create Account</button>
        </form > 

        <p className='text-center mt-4'>Already have an Account <Link className='text-blue-600 font-semibold' to='/login'>Login here</Link></p>
        </div>
 
        <div className='w-full'>
                 <p className='text-[11px] leading-tight w-full text-justify'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Service apply</span> </p>    
            </div>
    </div>
    </div>
  )
}

export default UserSignup