import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  let params = useParams();
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-900 text-white' >
      Search {JSON.stringify(params)}
    </div>
  )
}

export default Search