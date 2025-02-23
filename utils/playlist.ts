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
	// raw string is big, base64 is bigger, base65536 is MUCH bigger, LZString is compact
	//return LZString.compressToEncodedURIComponent(JSON.stringify(playlist))
}

export function queryToPlaylist(query: string): Playlist {
	return JSON.parse(decodeURIComponent(query)) as Playlist
	//return JSON.parse(LZString.decompressFromEncodedURIComponent(query))
}
