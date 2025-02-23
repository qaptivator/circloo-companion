import { describe, it, expect } from 'vitest'
import * as playlist from '../utils/playlist'

/**
 * PLAYLISTS
 *
 * playlists are collections of levels.
 * we want to add custom collections, made by users.
 * we store playlist information using json inside url params.
 * then, on the front end, we display the information.
 *
 * firstly, we need CRUD (create, read, update, delete)
 *
 * CREATE: we make a new Playlist, leave it empty and add it to the localstorage
 * READ: we parse the json and get our level ids
 * UPDATE: we update the info in the ui
 * DELETE: we just delete the json from localstorage
 */

const examplePlaylist: Playlist = {
	name: 'Example playlist',
	creator: 'someone',
	color: 26,
	levels: ['a', 'b', 'c'],
}
const exampleStringPlaylist: string =
	'{"name":"Example playlist","creator":"someone","color":26,"levels":["a","b","c"]}'

describe('playlistToQuery', () => {
	it('sringify json correctly', () => {
		expect(playlist.playlistToQuery(examplePlaylist)).toEqual(
			exampleStringPlaylist
		)
	})
})

describe('queryToPlaylist', () => {
	it('parse json correctly', () => {
		expect(playlist.queryToPlaylist(exampleStringPlaylist)).toEqual(
			examplePlaylist
		)
	})
})
