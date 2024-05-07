import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  useRef, useState } from "react";
function App() {
  //   const dispatch=useDispatch();

  //   const[movies,setMovies]=useState([])
  //   const[pages,setPagesCount]=useState(0)
  // //  let i=1
  //   //get all movies by axios
  //   const getAllMovies=async()=>{
  //     try{
  //     const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a75f7d44f83d583430916ad32febef46&&language=ar&page=1`)
  //     setMovies(res.data.results)
  //     setPagesCount(res.data.total_pages)
  //     }catch(error){
  //       console.log(error)
  //     }

  //   }
  //     //get current movies page by axios
  //     const getPage=async(page)=>{
  //       try{
  //         // i=page
  //         // getAllMovies();
  //       const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a75f7d44f83d583430916ad32febef46&&language=ar&page=${page}`)
  //       setMovies(res.data.results)
  //       setPagesCount(res.data.total_pages)
  //       }catch(error){
  //         console.log(error)
  //       }

  //     }
  //   const search=async(word)=>{
  //     try{
  //     if(word!==""){
  //     const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a75f7d44f83d583430916ad32febef46&query=${word}`)
  //     setMovies(res.data.results)
  //     setPagesCount(res.data.total_pages)
  //     }else{
  //       getAllMovies()
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  //   }
  //   useEffect(()=>{
  //     getAllMovies()
  //     dispatch(getFullMovies())
  //   },[])
  const[x,setX]=useState(1)
  const movieList = useRef(null);
  const onFocusInput = () => {
    movieList.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="">
      <Navbar onFocusInput={onFocusInput} x={x}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movieList={movieList} setX={setX} />} />
            <Route path="/movie/:id" element={<MovieDetails setX={setX}/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
export default App;
