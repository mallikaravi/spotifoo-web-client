import logo from "./assets/logo.svg";
import "./styles/App.css";
import { AppService } from "./services/app.service";
import { Songs } from "./components/Songs";
import { Filters } from "./components/Filter";
import { Card } from "./components/Card";
import SearchInput from "./components/Search";
import { genericSearch } from "./utils/genericSearch";
import { genericFilter } from "./utils/genericFilter";
import IFilter from "./interfaces/IFilter";
import { useState } from "react";

function App() {
  const appService = new AppService();
  const [songs, setSongs] = useState<any>([]);
  const [query, setQuery] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<Array<IFilter<string>>>(
    []
  );
  const getAllSongs = async () => {
    const songs = await appService.getAllSongs();
    console.log(songs);
    setSongs(songs);
  };
  const countries = [{}];
  const resultWidgets = { songs }
    .filter((song) => genericSearch(song, ["title", "description"], query))
    .filter((song) => genericFilter(song, activeFilters));

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
      <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
    </div>
  );
}

export default App;
