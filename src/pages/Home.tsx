import { AppService } from "../services/app.service";

import { useEffect, useState } from "react";
import NOIMG from "../assets/picture-no-album.png"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../styles/App.css"
import Label from "react-bootstrap/FormLabel";

export const Home = ()=> {

  const appService = new AppService();
  const [songs, setSongs] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    const getAllSongs = async () => {
      const songs = await appService.getAllSongs();
      setSongs(songs);
    };
    getAllSongs();

  }, [])

  useEffect(() => {
    const getAllGenres = async () => {
      const genres = await appService.getAllGenres();
      setGenres(genres);
    };
    getAllGenres();
  }, [])

  const playSong=(event:any) => {
		alert("[HOME] Play Song (Implementaion in progress)")
	}

  // replace image function
  const replaceImage = (event: any) => {
    event.target.src = NOIMG;
  }

  const artistset = new Set()
  const uniqueArtist = songs.filter(song => {
    const alreadyHas = artistset.has(song.artist)
    artistset.add(song.artist)
    return !alreadyHas
  })

  const albumset = new Set()
  const uniqueAlbums = songs.filter(song => {
    const alreadyHas = albumset.has(song.album)
    albumset.add(song.album)
    return !alreadyHas
  })

  // Sorting
  const albumSorting = [...uniqueAlbums].sort((a, b) => a.album.localeCompare(b.album));
  const artistSorting = [...uniqueAlbums].sort((a, b) => a.artist.localeCompare(b.artist));
  const genreSorting = [...genres].sort((a, b) => a.localeCompare(b));


  return (
    <main className="container-fluid body-content">
     
        <br />
        <h1 style={{textAlign:"left"}}> Artist</h1>
        <Row xs={1} md={4} className="g-4">
          {
            artistSorting.map((song => (<Col id={song.id} property="homecard">
              <Card onClick={(event)=>playSong(event)}>
                <Card.Img className="card-img-top" src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG} onError={(event) => replaceImage(event)} />
                <Card.Body>
                  <Card.Title>{song.artist}</Card.Title>
                </Card.Body>
              </Card>
            </Col>)))
          }
        </Row>
        <br />
        <h1 style={{textAlign:"left"}}> Album</h1>
        <Row xs={1} md={4} className="g-4">
          {
            albumSorting.map((song => (<Col id={song.id} property="homecard">
              <Card onClick={(event)=>playSong(event)}>
                <Card.Img className="card-img-top" src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG} onError={(event) => replaceImage(event)} />
                <Card.Body>
                  <Card.Title>{song.album}</Card.Title>
                </Card.Body>
              </Card>
            </Col>)))
          }
        </Row>
        <br />
        <h1 style={{textAlign:"left"}}> Genre</h1>
        <Row xs={1} md={4} className="g-4">
          {
            genreSorting.map((genre => (<Col id={genre}>
              <Card property="homecard" onClick={(event)=>playSong(event)}>
                <Card.Img variant="top" src={NOIMG} />
                <Card.Body>
                  <Card.Title>{genre}</Card.Title>
                </Card.Body>
              </Card>
            </Col>)))
          }

        </Row>
    </main>
  );
}