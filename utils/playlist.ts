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

export function queryToPlaylist(query: string): Playlist | undefined {
	//return JSON.parse(LZString.decompressFromEncodedURIComponent(query))
	const parsed = JSON.parse(decodeURIComponent(query)) as Playlist
	if (!parsed.color) parsed.color = 0 // default playlist color here
	return parsed.name && parsed.levels ? parsed : undefined
}

export function nameToParam(playlist: Playlist): string {
	return encodeURIComponent(playlist.name.replace(/\s/g, ''))
}
