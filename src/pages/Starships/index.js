import React, { useEffect } from 'react';
import SearchBox from '../../components/SearchBox';
import StarshipList from '../../components/StarshipList';

function Starships() {
  useEffect(() => {
    document.title = "STAR WARS-Starships";
  }, []);

  return (
    // Connect Starships page
    <div>
      <SearchBox />
      <StarshipList />
    </div>
  )
}
export default Starships;