import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[10%] md:pt-[20%] px-6 md:px-16 absolute aspect-video text-white bg-gradient-to-r from-black '>
        <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div>
        <button className="bg-white text-black py-2 md:py-3 px-4 md:px-8 text-xl mt-4 md:mt-0 rounded-lg hover:bg-opacity-70">
Play
</button>
<button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-8 text-xl bg-opacity-50 rounded-lg">
More Info
</button>
</div>
    </div>
  )
}

export default VideoTitle