import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
/* import './index.css';
import App from './App'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating starNum={5} className={'test'} messages={['Terrible', 'bad', 'Okay', 'Good', 'Amazing']} defaultRating={4}/>
    <StarRating starNum={6} color={'red'}/>
    <StarRating size={25}/>
    <TestRating />

{/*     <App />
 */}  </React.StrictMode>
);

function TestRating() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
        {<StarRating
           starNum={5} 
           className={'test'} 
           messages={['Terrible', 'bad', 'Okay', 'Good', 'Amazing']} 
           defaultRating={4}
           setMovieRating={setMovieRating}
          />
        }
        <p>This Movie was Rated {movieRating} </p>
    </>

  )
}