const HomeHero = () => {
  return (
    <div className='lg:w-1/2 md:w-10/12 w-11/12 h-2/6 text-white flex flex-col justify-center items-center text-center' >
    <div className='text-4xl font-bold my-2' >
    Stream Premium Movies, Webseries, Sports & Games for Free 
    </div>
    
    <div className=' my-2 text-sm text-gray-400'>
      Introducing the ultimate movie streaming experience! With our platform, you have access to a vast library of the latest and greatest films and TV shows, all in one place. 
    </div>
    <div className=' my-2'>
      <button type='button' className='bg-red-500 rounded-md p-2' >
         Watch Free
      </button>
    </div>
    </div>
  )
}

export default HomeHero