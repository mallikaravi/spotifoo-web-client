import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import NOIMG from "../assets/picture-no-album.png";
import "../styles/Search.css";

export const CardLayout = ({ songs, loading , handleClick}: any) => {
  //console.log('Songs length =>', songs.length)
  if (loading) {
    return <h2> Loading...</h2>;
  }
  if (songs.length === 0) return null;

  // replace image function
  const replaceImage = (event: any) => {
    event.target.src = NOIMG;
  };
  const songsSorting = [...songs].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  
  return (
    <Col>
      {songsSorting.map((song: any, index: number) => (
        <Card
          id={song.id}
          className="card-search-body"
          style={{ width: "25rem" }}
          onClick={(event) => handleClick(event)}
        >
          <Card.Img
            id={song.id}
            className="card-search-img"
            src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG}
            onError={(event) => replaceImage(event) }
          />
          <Card.Body id={song.id} >
            <Card.Title id={song.id} className="card-search-title">{song.title}</Card.Title>
            <Card.Text id={song.id} className="card-search-text">{song.artist}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
  );
};
