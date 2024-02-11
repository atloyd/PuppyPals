import { useState } from 'react';
import './App.css'
import { puppyList } from './data';

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // function handleClick() {
  //   console.log("puppy id: ", puppy.id);
  // }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      <div className='App'>
        {
          puppies.map((puppy) => {
            return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>{featuredPup.age}</li>
            <li>{featuredPup.email}</li>
          </ul>
        </div>
        )}
        
      </div>
    </>
  )
}

export default App

