import React, {useState} from 'react'

const Tour = ({id,image,info,name,price,deleteTour}) => {
const [readMore, setReadMore] = useState(false);

  return (
    <article className="card_one">
      <div className="tour_image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <h2 className="tour_price">₹ {price}</h2>
      <p className="tour_info">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="read" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show less' : 'Read More'}
        </button>
      </p>
      <button className="tour_btn" onClick={() => deleteTour(id)}>
        Remove
      </button>
    </article>
  );
}

export default Tour