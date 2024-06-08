import React,{useState} from 'react'
import Logo_Youtube from '../../../assets/Logo_Youtube.png'
import Channel_Logo from '../../../assets/Channel_Logo.jpg'
import { FaXTwitter } from "react-icons/fa6";



function Layout({children}) {
    const [open, setOpen] = useState(true);
    const menus = [
        {
            lebel: 'home',
            icon:'home'
        },
        {
            lebel: 'shorts',
            icon:'app_shortcut'
        },
        {
            lebel: 'subscription',
            icon:'loyalty'
        },
        {
            lebel: 'music',
            icon:'headphones'
        },
        {
            lebel: 'home',
            icon:'home'
        },
        {
            lebel: 'shorts',
            icon:'app_shortcut'
        },
        {
            lebel: 'subscription',
            icon:'loyalty'
        },
        {
            lebel: 'music',
            icon:'headphones'
        },
        {
            lebel: 'home',
            icon:'home'
        },
        {
            lebel: 'shorts',
            icon:'app_shortcut'
        },
        {
            lebel: 'subscription',
            icon:'loyalty'
        },
        {
            lebel: 'music',
            icon:'headphones'
        },
        {
            lebel: 'home',
            icon:'home'
        },
        {
            lebel: 'shorts',
            icon:'app_shortcut'
        },
        {
            lebel: 'subscription',
            icon:'loyalty'
        },
        {
            lebel: 'music',
            icon:'headphones'
        }
    
    
    ]

      
  return (
    <div>
        <div>
            <nav className='bg-white border-b fixed top-0 left-0 w-full h-16 z-10 px-5 flex justify-between items-center'>
                <div className='flex items-center gap-x-4'>
                    <button onClick={() => setOpen(!open)} className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
                        <span className='material-icons-outlined' style={{fontSize: 24}}>menu</span>
                    </button>
                    <img src={Logo_Youtube} alt="Logo"
                        className='w-16'                
                    />
                </div>
                <div className='bg-slate-300 w-1/2 flex flex-col'>
                    <form className='flex'> 
                        <input className='border border-slate-300 rounded-l flex-1 p-3' />
                        <button>
                            <span 
                            className='text-slate-400 material-icons-outlined border-l-0 rounded-r h-10 flex items-center justify-center w-16' 
                            style={{fontSize: 24}}
                            >
                                search
                            </span>
                        </button>
                    </form>
                                  
                    
                </div>
                <div className='flex items-center gap-x-2'>
                    {/* {Todo : make seperate button component and pass the props} */}
                    <button  className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
                        <span className='material-icons-outlined' style={{fontSize: 24}}>videocam</span>
                    </button>
                    <button  className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
                        <span className='material-icons-outlined' style={{fontSize: 24}}>notifications</span>
                    </button>
                    <button className='hover:bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center'>
                        <span style={{fontSize: 24}}><FaXTwitter/></span>
                    </button>
                    <img src={Channel_Logo} alt="Logo"
                        className='w-16 h-10 rounded-full'                
                    />
                </div>
            </nav>
            <aside className='overflow-auto bg-white border-r h-full fixed top-0 left mt-16 flex flex-col px-3 gap-y-2 py-3'
            style={{
                width: open ? 250: 70,
                transition: '0.2s'
            }}
            >
                {
                    menus.map((item,index)=>(
                        <button 
                            key={index}
                            className={`flex ${open ? 'flex-row' : 'flex-col'}  ${open? 'items-start': 'items-center'} gap-x-5 py-2 px-2 rounded-lg hover:bg-gray-100 `}
                        >
                            <span className='material-icons-outlined text-slate-700'
                                style={{ fontSize: 24 }}>
                                {item.icon}
                            </span>
                            <span 
                                className= {`text-slate-700 capitalize ${open ? null:'text-xs'}`}
                            >
                                {open ? item.lebel : item.lebel.slice(0,5)}
                                </span>
                        </button>
                    ))
                }

            </aside>
            <section 
            className='mt-16 p-5'
            style={{
                marginLeft: open ? 250: 70
            }}>
                {children}
            </section>
        </div>
        
    </div>
  )
}

export default Layout