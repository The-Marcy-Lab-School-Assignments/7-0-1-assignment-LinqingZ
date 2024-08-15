import { useState, useEffect } from "react";
import apiKey from "../../config";

const TrendingGifs = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3`
        );

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingGifs();
  }, []);

  return (
    <div>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
};

export default TrendingGifs;
