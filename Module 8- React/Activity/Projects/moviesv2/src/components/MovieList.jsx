import React from 'react'


function MovieList() {
    let [movies, setMovie] = React.useState("");

    //console.log(results);
    React.useEffect(async function () {

        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=3d0d19fa95bbcb42f7a4cf93bc4eeead");
        let data = await response.json();
        //console.log(data);

        let movies = data.results;
        //console.log(movies[0].title)

        setMovie(movies);
    }, [])



    return (
        <>


            <div className={''}>
                {/*1. Heading */}
                <div className='mt-8 mb-8 font-bold   text-center text-2xl'>Trending Movies</div>





                {/*2. Movies List */}
                <div className='flex flex-wrap justify-center'>
                    {/*2.1 Movie-1 */}
                    {/* <div className={`bg-[url("https://image.tmdb.org/t/p/original//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                        <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">Title</div>
                    </div> */}

                    {/* using map */}
                    {
                        movies == "" ? <h1>Movie yet to come </h1> :
                            <>
                                {movies.map((movieObj, idx) => {
                                    return (
                                        <div key={idx}>
                                            <div className={`bg-[url("https://image.tmdb.org/t/p/original//${movieObj.poster_path}")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                                                <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">{movieObj.title}</div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </>

                    }


                    {/* <div className={`bg-[url("https://image.tmdb.org/t/p/original//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                        <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">Title</div>
                    </div>

                    <div className={`bg-[url("https://image.tmdb.org/t/p/original//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                        <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">Title</div>
                    </div>


                    <div className={`bg-[url("https://image.tmdb.org/t/p/original//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                        <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">Title</div>
                    </div>

                    <div className={`bg-[url("https://image.tmdb.org/t/p/original//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                        <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">Title</div>
                    </div>

                    <div className={`bg-[url("https://image.tmdb.org/t/p/original//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg")] md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 `}>
                        <div className="text-white text-center text-xl font-bold bg-gray-900 w-full rounded-b-lg">Title</div>
                    </div> */}



                </div>
            </div>

        </>

    )

}

export default MovieList