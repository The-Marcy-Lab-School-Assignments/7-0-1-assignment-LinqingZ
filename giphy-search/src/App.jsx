import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import TrendingGifs from './components/TrendGif'

function App() {
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch />
        <br />
        {/* <GifContainer /> */}
        <TrendingGifs/>
      </div>
    </div>
  );
}

export default App;
