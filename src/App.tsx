import logo from "./assets/logo.svg";
import "./styles/App.css";
import { AppService } from "./services/app.service";
import { Songs } from "./components/Songs";
import { useState } from "react";

function App() {
  const appService = new AppService();
  const [songs, setSongs] = useState<any>([]);

  const getAllSongs = async () => {
    const songs = await appService.filterByArtist("killer");
    console.log(songs);
    setSongs(songs);
  };
  return (
    <div className="App">
      <div className="col-md-4">
        <div className="btn">
          <button
            type="button"
            onClick={(e) => getAllSongs()}
            className="btn btn-warning"
          >
            Get all Songs
          </button>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Songs songs={songs}></Songs>
      </div>
    </div>
  );
}

export default App;
