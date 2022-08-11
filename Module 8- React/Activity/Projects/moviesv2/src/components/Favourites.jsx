import React from 'react'
import NavBar from './NavBar'
import Pagination from './Pagination'

function Favourites() {
  const [cuurGenre , setCurrGenre] = React.useState("Action")

  return (
    <>
    {/*1.NavBar */}
    <NavBar></NavBar>
    {/*2.Genere Container */}
     <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2'>
       <button className= {cuurGenre== "All Genere" ? 'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold':'m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'} >
        All Genere
       </button>
       <button className= {cuurGenre== "Action" ? 'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold':'m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'}>
        Action
       </button>
       <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
        Animation
       </button>
       <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
        Fantasy
       </button>
       <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
        Family
       </button>
       <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
        Music
       </button>
       <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
         Drama
       </button>
       <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
        Rommance
       </button>
     </div>

     {/*3.Input Container */}
     <div className='text-center'>
          <input type="text" placeholder='Search' className='border border-2 text-center p-1 m-2 rounded-lg' />
          <input type="number" placeholder='Rows' className='border border-2 text-center p-1 m-2 rounded-lg' />
     </div>

     {/*4.Table Container  */}
  
    <div className='flex justify-center '>
    <div className="flex flex-col m-4">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 min-w-full">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className='flex'>
                  <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'

                  />
                  Rating
                  <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'

                    className='ml-2 mr-2' />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className='flex'>
                  <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png'

                    className='mr-2' />
                  Popularity
                  <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2'

                  />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Genre
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

          {/* Row 1 */}
            <tr >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
                    <img className="hidden md:block md:h-[100px] md:w-[180px]" src={`https://image.tmdb.org/t/p/w500/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg`} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 font-bold">Spider</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">8.208</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">3198.248</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   Action
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                <button href="#" className="text-red-600 hover:text-red-900"

                >
                  Delete
                </button>
              </td>
            </tr>
          {/* Row 2 */}
          <tr >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
                    <img className="hidden md:block md:h-[100px] md:w-[180px]" src={`https://image.tmdb.org/t/p/w500/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg`} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 font-bold">Spider</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">8.208</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">3198.248</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   Action
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                <button href="#" className="text-red-600 hover:text-red-900"

                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>









     {/*5.Pagination */}
      <Pagination></Pagination>
    </>
   
  )
}

export default Favourites