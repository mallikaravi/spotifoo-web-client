import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import NOIMG from "../assets/picture-no-album.png"
import "../styles/Search.css"

export const Songs = ({ songs, loading }: any) => {
	//console.log('Songs length =>', songs.length)
	if (loading) {
		return (<h2> Loading...</h2>);
	}
	if (songs.length === 0) return null

	// replace image function
	const replaceImage = (event: any) => {
		event.target.src = NOIMG;
	}
	const songsSorting = [...songs].sort((a, b) => a.title.localeCompare(b.title));
	const playSong=(event:any) => {
		alert("[Songs] Play Song (Implementation in progress)")
	}
	return (
		<>
			<Col>
				{
					songsSorting.map(((song: any) => (

						<Card className='card-search-body' style={{ width: "25rem" }} onClick={(event)=>playSong(event)}>
							<Card.Img className='card-search-img' src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG} onError={(event) => replaceImage(event)} />
							<Card.Body>
								<Card.Title className='card-search-title'>{song.title}</Card.Title>
								<Card.Text className='card-search-text'>{song.artist}</Card.Text>
							</Card.Body>
						</Card>



					)))
				}
			</Col>
		</>
	)
}
