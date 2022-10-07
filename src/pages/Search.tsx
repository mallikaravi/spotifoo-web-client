import { AppService } from "../services/app.service";
import { CardLayout as SongsList } from "../components/SearchResults";
import { Pagination } from "../components/Pagination";
import SearchInput from "../components/SearchInput";

import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";



export const Search = () => {
  const [selectedSong, setSelectedSong] = useState<string>();
  
  const appService = new AppService();

  const [songs, setSongs] = useState([]);
  const [totalSongs, setTotalSongs] = useState([]);

  // Add Pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(10);

  // Search By Title
  const [query, setQuery] = useState<string>("");

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

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
    if (query.length < 1) pagination();
  }, [query, currentPage]);

  useEffect(() => {
    const search = async () => {
      const songs = await appService.search(query);
      setSongs(songs);
      setTotalSongs(songs);
    };
    if (query.length > 0) {
      search();
    }
  }, [query]);

  return (
    <>
    <main className="container-fluid body-content">
      <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
      <SongsList songs={songs} loading={loading} onSelection={(selectedSong:any) => setSelectedSong(selectedSong)}/>
      <Pagination
        songsPerPage={songsPerPage}
        totalSongs={totalSongs.length}
        paginate={paginate}
      />
    </main>
     <Footer selectedSong={selectedSong} />
     </>
  );
};
