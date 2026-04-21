// import { useState } from 'react'

import './header.css'


function Header({data}) {
    return (
<>
<section>
    
    <div className="flex justify-around w-screen  ">
    <header className="bg-pink-800 flex justify-around rounded-4xl w-300 h-20 items-center flex-wrap ">
<div className="head">
    <h2 className="text-xl text-yellow-300 font-extrabold ">EatingAdda.com</h2>
    
</div>
<div className="menu">
    <nav className="nav">
        <ul className='flex gap-5'>
            
            <li><a href="#" className='hover:border-b-2 text-white'>Home</a></li>
            <li><a href="#" className='hover:border-b-2 text-white'>About</a></li>
            <li><a href="#" className='hover:border-b-2 text-white'>Contact</a></li>
            <li><a href="#" className='hover:border-b-2 text-white'>Service</a></li>
        </ul>
    </nav>
</div>
       
    </header>
    </div>
    
</section>


</>



    )
  
}

export default Header;
