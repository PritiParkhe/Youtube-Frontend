import React from 'react';
import home from '../../assets/home.png';
import gameIcon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';

function Sidebar({ isOpen }) {
    // Define the list of menu items with their respective icons and names
    const menuItems = [
        { icon: home, name: 'Home' },
        { icon: gameIcon, name: 'Gaming' },
        { icon: automobiles, name: 'Automobiles' },
        { icon: sports, name: 'Sports' },
        { icon: entertainment, name: 'Entertainment' },
        { icon: tech, name: 'Technology' },
        { icon: music, name: 'Music' },
        { icon: blogs, name: 'Blogs' },
        { icon: news, name: 'News' },
    ];

    return (
        <div
            className={`fixed top-0 left-0 z-50 h-screen bg-white overflow-y-auto transition-transform duration-300 ${
                isOpen ? 'transform-none' : '-translate-x-full'
            } w-64 sm:w-1/5`}
        >
            {/* Sidebar content */}
            <div className="py-4 px-4 sm:px-6 lg:px-8">
                <div className="shortcut-links space-y-4 md:space-y-5">
                    {/* Render the menu items */}
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 cursor-pointer">
                            <img src={item.icon} alt={item.name} className="w-6 h-6" />
                            <span className="hidden md:inline-block">{item.name}</span>
                        </div>
                    ))}

                    {/* Separator */}
                    <hr className="my-6 border-t border-gray-300" />

                    {/* Subscribed list */}
                    <div className="subscribed-list text-sm text-gray-600">
                        <h3 className="mb-4">Subscribed</h3>
                        <div className="flex items-center mb-4">
                            <img src={jack} alt="Subscribed" className="w-8 h-8 rounded-full mr-4" />
                            <p>Jack</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
