export class AppService {


	public async getAllSongs(): Promise<any> {
		const response = await fetch('/music');
		return await response.json();
	}

	public async getAllGenres(): Promise<any> {
		const response = await fetch('/genre');
		return await response.json();
	}

	public async search(keyword: any): Promise<any> {
		const response = await fetch('/music?search=' + keyword);
		return await response.json();
	}

	public async filterByArtist(keyword: any): Promise<any> {
		const response = await fetch('/music?filter=artist&search=' + keyword);
		return await response.json();
	}

	public async filterByGenre(keyword: any): Promise<any> {
		const response = await fetch('/music?filter=genre&search=' + keyword);
		return await response.json();
	}

	public async filterByTitle(keyword: any): Promise<any> {
		const response = await fetch('/music?filter=title&search=' + keyword);
		return await response.json();
	}

	public async filterByAlbum(keyword: any): Promise<any> {
		const response = await fetch('/music?filter=album&search=' + keyword);
		return await response.json();
	}

	public async pagination(pageNumber: any, items: any): Promise<any> {
		const response = await fetch('/music?page=' + pageNumber + '&items=' + items);
		return await response.json();
	}

}