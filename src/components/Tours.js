import React from 'react'

import Tour from './Tour';

const Tours = ({tours,deleteTour}) => {
  return (
    <main>
        <div className="tour_title">
            <h2>My Tour</h2>
        </div>
        <div className="tour_container">
            {tours.map((tour)=>{
             return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
            })}
        </div>
    
    </main>
  )
}

export default Tours