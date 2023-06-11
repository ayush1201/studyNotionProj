import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const [formData,setFormData] = useState({email:"", password:""})

    const [showPassword,setShowPassword] = useState(false)

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev) => ({
            ...prev,[event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        const data = {
            ...formData
        }
        console.log(data);
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col mt-6 gap-y-4 w-full'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Email address <sup className='text-pink-200'>*</sup> </p>

            <input type="email"
            name='email'
            onChange={changeHandler}
            placeholder='Enter email ID'
            value={formData.email}
            className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup> </p>

            <input type={showPassword ? ("text") : ("password")}
            name='password'
            onChange={changeHandler}
            placeholder='Enter Password'
            value={formData.password}
            className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />

            <span className='cursor-pointer absolute right-3 top-[38px]' onClick={() => setShowPassword((prev) => !prev)}
            >{showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}</span>

            <Link to="#">
                <p className='text-blue-100 mt-1 text-xs text-end'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
        
    </form>
  )
}

export default LoginForm