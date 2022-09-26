export class AppService {


	public async getAllSongs(): Promise<any> {
		const response = await fetch('/music');
		return await response.json();
	}
}