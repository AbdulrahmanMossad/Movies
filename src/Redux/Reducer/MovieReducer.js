import { AllMovies } from "../Types/MoviesTypes"
const intialValue={movies:[],pageCounter:0}
export const MovieReducer=(state=intialValue,action)=>{
    switch(action.type){
        case AllMovies:
            return {movies:action.data,pageCounter:action.pages}
        default:
            return state

    }
}