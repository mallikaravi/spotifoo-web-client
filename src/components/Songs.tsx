import React from 'react'

export const Songs = ({ songs, loading }: any) => {
	//console.log('Songs length =>', songs.length)
	if(loading){
		return (<h2> Loading...</h2>);
	}
	if (songs.length === 0) return null

	const SongsRow = (song: any, index: number) => {

		return (
			<tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
				<td>{song.id}</td>
				<td>{song.title}</td>
				<td>{song.artist}</td>
				<td>{song.album}</td>
				<td>{song.genre}</td>

			</tr>
		)
	}

	const songTable = songs.map((song: any, index: number) => SongsRow(song, index))

	return (
		<div className="container">
			<h2>Songs</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Genre</th>
					</tr>
				</thead>
				<tbody>
					{songTable}
				</tbody>
			</table>
		</div>
	)
}
