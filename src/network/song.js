import { request } from './request'

export function getSongData(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}