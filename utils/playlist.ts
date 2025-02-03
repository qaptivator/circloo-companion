import LZString from 'lz-string'

export type Playlist = {
	name: string
	creator?: string
	color: number // hue
	levels: LevelId[]
}

export function playlistToQuery(playlist: Playlist): string {
	return JSON.stringify(playlist)
	//return encodeURIComponent(JSON.stringify(playlist))
}
