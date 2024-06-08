import React from 'react';

function Sidebar({ open, menus }) {
  return (
    <aside className='overflow-auto bg-white border-r h-full fixed top-0 left mt-16 flex flex-col px-3 gap-y-2 py-3'
      style={{
        width: open ? 250 : 70,
        transition: '0.2s'
      }}
    >
      {menus.map((item, index) => (
        <button
          key={index}
          className={`flex ${open ? 'flex-row' : 'flex-col'} ${open ? 'items-start' : 'items-center'} gap-x-5 py-2 px-2 rounded-lg hover:bg-gray-100 `}
        >
          <span className='material-icons-outlined text-slate-700' style={{ fontSize: 24 }}>
            {item.icon}
          </span>
          <span className={`text-slate-700 capitalize ${open ? null : 'text-xs'}`}>
            {open ? item.label : item.label.slice(0, 5)}
          </span>
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
