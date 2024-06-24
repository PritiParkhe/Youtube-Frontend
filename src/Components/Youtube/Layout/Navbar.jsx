import React from 'react';
import Logo_Youtube from '../../../assets/Logo_Youtube.png';
import Channel_Logo from '../../../assets/Channel_Logo.jpg';

function Navbar({ setOpen, open }) {
  return (
    <nav className='bg-white border-b fixed top-0 left-0 w-full h-16 z-10 px-5 flex justify-between items-center'>
      <div className='flex items-center gap-x-4'>
        <button onClick={() => setOpen(!open)} className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <span className='material-icons-outlined' style={{ fontSize: 24 }}>menu</span>
        </button>
        <img src={Logo_Youtube} alt="Logo" className='w-16' />
      </div>
      <div className='bg-slate-300 w-1/2 flex flex-col'>
        <form className='flex'>
          <input className='border border-slate-300 rounded-l flex-1 p-3' />
          <button>
            <span className='text-slate-400 material-icons-outlined border-l-0 rounded-r h-10 flex items-center justify-center w-16' style={{ fontSize: 24 }}>
              search
            </span>
          </button>
        </form>
      </div>
      <div className='flex items-center gap-x-2'>
        <button className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <span className='material-icons-outlined' style={{ fontSize: 24 }}>videocam</span>
        </button>
        <button className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <span className='material-icons-outlined' style={{ fontSize: 24 }}>notifications</span>
        </button>
        <img src={Channel_Logo} alt="Logo" className='w-16 h-10 rounded-full' />
      </div>
    </nav>
  );
}

export default Navbar;
