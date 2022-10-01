import logo from "./assets/logo.svg";
import "./styles/App.css";
import { AppService } from "./services/app.service";
import { Songs } from "./components/Songs";
import { Pagination } from "./components/Pagination";
import SearchInput from "./components/Search";
import { genericSearch } from "./utils/genericSearch";


import { useEffect, useState } from "react";

function App() {
  const appService = new AppService();

  const [songs, setSongs] = useState([]);
  const [totalSongs, setTotalSongs] = useState([]);

  // Search By Title
  const [query, setQuery] = useState<string>("");
  // const [activeFilters, setActiveFilters] = useState<Array<IFilter<string>>>(
  //   []
  // );

  useEffect(() => {
    const filterByTitle = async () => {
      const songs = await appService.filterByTitle(query);
      setSongs(songs);
      setTotalSongs(songs)
    };
    console.log("filterByTitle. " + songs.length)
    if (query.length > 0) filterByTitle();
  }, [query])


  
  // Add Pagination
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [songsPerPage] = useState(10)
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
    console.log("setCurrentPage. " + pageNumber)
  }

  useEffect(() => {
    const pagination = async () => {
      setLoading(true);
      // Getting all the songs to know the total songs count
      const totalSongs = await appService.getAllSongs();
      setTotalSongs(totalSongs);

      const songs = await appService.pagination(currentPage, songsPerPage);
      setSongs(songs);
      setLoading(false);
    };
    console.log("Pagination. " + songs.length)
    if (query.length < 1) pagination()
  }, [query, currentPage]);


  return (
    <div className="App">
      <div>
        <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
      </div>
      <Songs songs={songs} loading={loading} />
      <Pagination songsPerPage={songsPerPage} totalSongs={totalSongs.length} paginate={paginate} />
    </div>
  );
}

export default App;
