import Loading from './components/Loading'
import Tours from "./components/Tours";

import React, {useState, useEffect} from 'react'

const url = 'https://course-api.com/react-tours-project/';


const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [tours,setTours] = useState([]);

  const deleteTour = function (id) {
    const updatedTour = tours.filter((tour) => tour.id !== id);
    setTours(updatedTour);
  };


const fetchTours = async()=>{
  setIsLoading(true);
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false)
    setTours(tours)
  } catch (error) {
    setIsLoading(true)
    console.log(error);
  }
}

useEffect(()=>{
fetchTours();
},[])



if(isLoading){
  return(
    <main className='loading_title'>
      <Loading/>
    </main>
  )
}

if(tours.length === 0){
return (
  <main>
    <div className="tour_title">
      <h2>My Tour</h2>
    </div>
    <button className='tour_btn' onClick ={()=> fetchTours()}>Refresh</button>
  </main>
);
}

return(
  <main>
    <Tours tours= {tours} deleteTour ={deleteTour}/>
  </main>
)
}

export default App
