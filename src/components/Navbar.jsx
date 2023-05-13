
import React,{ useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';


import logo from '../assets/logo.PNG'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center  bg-[#ffffff] text-black shadow-md z-9999'>
        <div className="ml-20 "><a href = " https://pavank158.github.io/deploy1/">
            <img src={logo} alt='Logo Image' style={{ width: '200px' }}  />
            </a>
        </div>
        
  

        {/*menu */}
        <ul className='hidden md:flex mr-20 text-lg'>
            <li>
            <a className="hover:text-blue-700">Home</a>
            </li>
            <li>
            <a className="hover:text-blue-700">About</a>
            </li>
            <li>        
            <a className="hover:text-blue-700">Contact</a>
            </li>
        </ul>

        {/*hamburgir */}
        <div onClick={handleClick} className='md:hidden z-10 mr-4'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col'} >
        <li className='py-6 text-4xl'>
        <a >Home</a>

        </li>
        <li className='py-6 text-4xl'>
        <a >About</a>
           
        </li>
        <li className='py-6 text-4xl'>
        <a >Contact</a>
        </li>
        </ul>
    </div>
  )
}

export default Navbar