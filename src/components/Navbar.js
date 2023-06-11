import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] items-center py-4 mx-auto'>
        <Link to="/">
            <img src={logo} loading='lazy'width={160} height={32}/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-x-4 items-center'>
            { !isLoggedIn && 
                <Link to="/login">
                    <button className='
                    bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700 border'>Login</button>
                </Link>
            }
            { !isLoggedIn && 
                <Link to="/signup">
                    <button className='
                    bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700 border'>Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='
                    bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700 border' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Log Out");
                    }}>Sign out</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='
                    bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700 border'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar