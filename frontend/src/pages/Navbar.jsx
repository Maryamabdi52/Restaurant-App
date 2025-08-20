import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);


  return (
    <div className='bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg fixed top-0 z-50 opacity-95 w-full'>
        <div className='flex justify-between items-center p-4 max-w-[1400px] mx-auto'>
            {/* <a href="/" className='flex items-center'>
                <img src={logoNav} alt="logo" className='max-w-[100px]'/>
            </a> */}

<div className='flex-1 flex justify-center'>
                            <Link to="/cart">
                                    <CartIcon/>
                            </Link>
                    </div>
            

            <button onClick={toggleNav} className='text-white lg:hidden'>
                {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            <nav className={`${nav ? "flex bg-blue-600" : "hidden"} absolute lg:static w-full lg:w-auto lg:flex flex-col lg:flex-row items-center
                                        space-y-5 lg:space-y-0 lg:space-x-6 top-14 left-0 right-0 py-5 lg:py-0 z-20 lg:ml-auto`}>
                        <Link to="/" className='text-white'>Home</Link>
                        <Link to="/contact" className='text-white'>Contact</Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar