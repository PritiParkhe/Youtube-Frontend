import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ children }) {
  const [open, setOpen] = useState(true);
  const menus = [
    { label: 'home', icon: 'home' },
    { label: 'shorts', icon: 'app_shortcut' },
    { label: 'subscription', icon: 'loyalty' },
    { label: 'music', icon: 'headphones' },
    // Duplicate entries removed for brevity
  ];

  return (
    <div>
      <Navbar setOpen={setOpen} open={open} />
      <Sidebar open={open} menus={menus} />
      <section 
        className='mt-16 p-5'
        style={{
          marginLeft: open ? 250 : 70
        }}>
        {children}
      </section>
    </div>
  );
}

export default Layout;
