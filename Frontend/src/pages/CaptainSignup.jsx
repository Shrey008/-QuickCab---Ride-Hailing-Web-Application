import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Quick_cab_logo from '../assets/logo/quick_cab_logo.png';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'
const CaptainSignup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
          fullname: {
            firstname: firstName,
            lastname: lastName
          },
          email: email,
          password: password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
          }
        }
    
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    
        if (response.status === 201) {
          const data = response.data
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
    
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    
      }

    return (
        <div>
            <div className='p-8 h-screen flex flex-col justify-between'>
                <div>
                    <img
                        className='w-24 mb-10 h-6'
                        src={Quick_cab_logo}
                        alt='Sample'
                    />

                    <form onSubmit={(e) => submitHandler(e)}>
                        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                        <div className='flex gap-2'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border  text-base placeholder:text-base'
                                type='text'
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border  text-base placeholder:text-base'
                                type='text'
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <h3 className='text-lg font-medium mb-2'>Enter your email</h3>
                        <input
                            required
                            className='bg-[#eeeeee] mb-3 px-4 py-2 border w-full text-base placeholder:text-base'
                            type='email'
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
                        <input
                            required
                            className='bg-[#eeeeee] mb-3 px-4 py-2 border w-full text-base placeholder:text-base'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
                        <div className='flex gap-2'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border text-base placeholder:text-base'
                                type='text'
                                placeholder='Vehicle Color'
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                            />
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border text-base placeholder:text-base'
                                type='text'
                                placeholder='License Plate'
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                            />
                        </div>
                        <div className='flex gap-2'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border text-base placeholder:text-base'
                                type='text'
                                placeholder='Vehicle Capacity'
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                            />
                            <select
                                required
                                className='bg-[#eeeeee] w-1/2 mb-3 px-4 py-2 border text-base'
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                            >
                                <option value=''>Select Type</option>
                                <option value='car'>Car</option>
                                <option value='auto'>Auto</option>
                                <option value='moto'>Moto</option>
                            </select>
                        </div>

                        <button className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 font-medium'>
                            Create Captain Account
                        </button>
                    </form>

                    <p className='text-center mt-4'>
                        Already have an Account{' '}
                        <Link className='text-blue-600 font-semibold' to='/captain-login'>
                            Login here
                        </Link>
                    </p>
                </div>

                <div className='w-full'>
                    <p className='text-[11px] leading-tight w-full text-justify mt-6'>
                        This site is protected by reCAPTCHA and the{' '}
                        <span className='underline'>Google Privacy Policy</span> and{' '}
                        <span className='underline'>Terms of Service apply</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CaptainSignup;
