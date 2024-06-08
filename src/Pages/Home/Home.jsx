import React, { useState } from 'react';
import Layout from '../../Components/Youtube/Layout/Layout';


function Home() {
    

    return (
        <Layout>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    // Todo: from api request
                    Array(12).fill(0).map((item,index)=>(
                        <div key={index} className='flex-col gap-y-4'>
                            <img src={`${'thumb/0.jpg'}`} alt=""  className='rounded-lg  '/>
                            <div className='flex gap-x-4'>
                                <img 
                                src="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj" 
                                className='rounded-full w-10 h-10' 
                                />
                                <div>
                                    <h1 className='text-sm font-semibold mb-3'>How to develop LOGIC BUILDING & PROBLEM SOLVING in PROGRAMMING🧑‍💻| 6 Practical Tips which I followed</h1>
                                    <div className='flex items-center gap-x-2 mb-1'>
                                        <p className='text-xs text-slate-500 '>Set India</p>
                                        <span className='material-icons' style={{fontSize: 16}}>check_circle</span>
                                    </div>
                                    <div className='flex items-center gap-x-2 '>
                                        <p className='text-xs text-slate-500 '>120k Views </p>
                                        <span className='text-xs text-slate-500 '>1 Day Ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    );
}

export default Home;







