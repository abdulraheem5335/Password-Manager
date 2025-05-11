import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-50 h-10 py-5">

        <div className="logo font-bold">
            <span className='text-green-500'>&lt;</span>
            Pass

            <span className='text-green-500'>OP/&gt;</span>
            </div>
        <ul>
            <li className='flex gap-10'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar