import { AllMovies } from "../Types/MoviesTypes";
import axios from "axios";
//axios without async and await (we use middleware in store ) because of bugs with redux that does not  wait for fetching data
// export const getFullMovies=()=>{
//     return async(dispatch)=>{
//         const res=await axios.get(MOVIES)
//         console.log(res.data.results)
//         dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
//     }

// }
// export const getMoviesSearch=(word)=>{
//     return async(dispatch)=>{
//         const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a75f7d44f83d583430916ad32febef46&query=${word}`)
//         console.log(res.data.results)
//         dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
//     }

// }
// export const getPages=(page)=>{
//     return async(dispatch)=>{
//         const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a75f7d44f83d583430916ad32febef46&&language=ar&page=${page}`)
//         console.log(res.data.results)
//         dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
//     }

// }
export const getByUrl=(url)=>{
    return async(dispatch)=>{
        const res=await axios.get(url)
        console.log(res.data)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    }

}
