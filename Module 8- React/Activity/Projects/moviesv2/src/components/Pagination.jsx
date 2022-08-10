import React from 'react'

function Pagination() {
    const [pageNo, setpageNumber] = React.useState(1);
    function incPageNumber(){
     setpageNumber(pageNo+1)
    }
    function decPageNumber(){
      if (pageNo == 1) {
        return;
    }
    setpageNumber(pageNo-1)  
    }


  return (
    <div className='mb-4 '>
        <button className='p-2 border border-red-300  text-red-400 border-r-0 rounded-l-xl' onClick={decPageNumber}>Previous</button>
        <button className='p-2 border border-red-300  text-red-400 shadow-indigo-500/50 bg-gray-200'>{pageNo}</button>
        <button className='p-2 border border-red-300  text-red-400 border-l-0 rounded-r-xl' onClick={incPageNumber}>Next</button>
    </div>
  )
}

export default Pagination