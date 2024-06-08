import React from 'react'
import Post from './Post'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-200'>
      <Post/>
      <Tweet/>
      
    </div>
  )
}

export default Feed