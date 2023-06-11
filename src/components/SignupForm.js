import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    const [showPasswordOne,setShowPasswordOne] = useState(false)

    const [showPasswordTwo,setShowPasswordTwo] = useState(false)
    const navigate = useNavigate();

    const [accountType,setAccountType] = useState("student");

    function changeHandler(event){
        setFormData((prev) => (
            {...prev,[event.target.name]:event.target.value}
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Signed In")
        const data = {
            ...formData,accountType
        }
        console.log(data);
        navigate("/dashboard");
    }

  return (

    <div>

        <div className='flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1 my-6'>
            <button 
            className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} 
            py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}>Student</button>
            <button
            className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} 
            py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>

            <div className='flex justify-between mt-[20px]'>
                <label className=''>
                    <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>
                        First Name <span className='text-pink-200'><sup>*</sup></span>
                    </p>

                    <input type="text"
                    name='firstName'
                    value={formData.firstName}
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />
                </label>

                <label className=''>
                    <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>
                        Last Name <span className='text-pink-200'><sup>*</sup></span>
                    </p>

                    <input type="text"
                    name='lastName'
                    value={formData.lastName}
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />
                </label>
            </div>
            
            <div className='mt-[20px]'>
                <label className='mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5
                mb-1 leading-[1.375rem]'>
                        Email Address <span className='text-pink-200'><sup>*</sup></span>
                    </p>

                    <input type="email"
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />
                </label>
            </div>
            

            <div className='flex justify-between mt-[20px]'>
                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>
                        Create Password <span className='text-pink-200'><sup>*</sup></span>
                    </p>

                    <input type={showPasswordOne ? ("text") : ("password")}
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />

                    <span className='cursor-pointer absolute right-3 top-[38px]' onClick={() => setShowPasswordOne((prev) => !prev)}>
                        {showPasswordOne ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label> 

                
                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5
            mb-1 leading-[1.375rem]'>
                        Confirm Password <span className='text-pink-200'><sup>*</sup></span>
                    </p>

                    <input type={showPasswordTwo ? ("text") : ("password")}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    className='bg-richblack-800 text-richblack-5 p-[12px] w-full rounded-[0.5rem] border-b-[1px] border-richblack-100' />

                    <span className='cursor-pointer absolute right-3 top-[38px]' onClick={() => setShowPasswordTwo((prev) => !prev)}>
                        {showPasswordTwo ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label> 
                
            </div>

            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>
                Create Account
            </button>


        </form>
    </div>

  )
}

export default SignupForm