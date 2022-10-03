import { AppService } from "../services/app.service";

import { useEffect, useState } from "react";
import NOIMG from "../assets/picture-no-album.png"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home() {

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

  // replace image function
  const replaceImage = (event: any) => {
    event.target.src = NOIMG;
  }

  // replace image function
  const defaultImage = (event: any) => {
    //replacement of broken Image
    event.target.src = NOIMG;
  }

  return (
    <main className="container">
      <div className="container-fluid body-content">
        <Row xs={1} md={4} className="g-4">

          {
            uniqueArtist.map((song => (<Col id={song.id}>
              <Card>
                <Card.Img className="card-img-top" src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG} onError={(event) => replaceImage(event)} />
                <Card.Body>
                  <Card.Title>{song.artist}</Card.Title>
                </Card.Body>
              </Card>
            </Col>)))
          }
        </Row>
        <Row xs={1} md={4} className="g-4">
          {
            uniqueAlbums.map((song => (<Col id={song.id}>
              <Card>
                <Card.Img className="card-img-top" src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG} onError={(event) => replaceImage(event)} />
                <Card.Body>
                  <Card.Title>{song.album}</Card.Title>
                </Card.Body>
              </Card>
            </Col>)))
          }
        </Row>
        <Row xs={1} md={4} className="g-4">
          {
            genres.map((genre => (<Col id={genre}>
              <Card>
                <Card.Img variant="top" src={NOIMG} />
                <Card.Body>
                  <Card.Title>{genre}</Card.Title>
                </Card.Body>
              </Card>
            </Col>)))
          }

        </Row>
      </div>
    </main>
  );
}

export default Home