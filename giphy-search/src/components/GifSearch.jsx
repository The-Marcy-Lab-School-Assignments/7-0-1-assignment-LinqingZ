// import { useState } from 'react';
// import GifContainer from './GifContainer';

// function GifSearch() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [gifs, setGifs] = useState([]);

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         try {
//             if (!apiKey) throw new Error('API key is missing');

//             const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`);
//             if (!response.ok) throw new Error(`Error: ${response.status}`);

//             const data = await response.json();
//             setGifs(data.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSearch}>
//                 <label htmlFor="searchInput">Enter a Search Term </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="searchInput"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button type="submit" className="btn btn-success">Find Gifs</button>
//             </form>
//             <GifContainer gifs={gifs} />
//         </div>
//     );
// }

// export default GifSearch;

import { useState, useEffect } from "react";
import GifContainer from "./GifContainer";
import apiKey from "../../config";

function GifSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        if (!apiKey) throw new Error("API key is missing");

        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (triggerFetch) {
      fetchGifs();
      setTriggerFetch(false);
    }
  }, [triggerFetch, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setTriggerFetch(true);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchInput">Enter a Search Term </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
      <GifContainer gifs={gifs} />
    </div>
  );
}

export default GifSearch;
