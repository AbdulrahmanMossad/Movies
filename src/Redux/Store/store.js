import { applyMiddleware, legacy_createStore as createStore} from "redux";
import { MovieReducer } from "../Reducer/MovieReducer";
import { thunk } from "redux-thunk";
//create Store with using middleware so we can fetch data with redux by using async and await 
export const store=createStore(MovieReducer,applyMiddleware(thunk))