import { request } from './request.js'

export function getBannerData(type) {
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}

export function getBallData() {
  return request({
    url: '/homepage/dragon/ball'
  })
}

export function getPlaylistsData(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}