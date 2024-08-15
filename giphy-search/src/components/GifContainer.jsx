function GifContainer({ gifs }) {
  return (
    <ul>
      {gifs.slice(0, 3).map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifContainer;
