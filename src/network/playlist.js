import { request } from './request.js'

export function getPlaylistDetail(id) {
  return request({
    url: 'playlist/detail',
    params: {
      id
    }
  })
}