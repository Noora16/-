import { request } from './request.js'

export function getPlaylistDetail(id) {
  return request({
    url: 'playlist/detail',
    params: {
      id
    }
  })
}

export class PlaylistInfo{
  constructor(playlist) {
    this.name = playlist.name;
    this.coverImage = playlist.coverImgUrl;
    this.count = playlist.playCount;
    this.description = playlist.description;
    this.creatorImage = playlist.creator.avatarUrl;
    this.creatorName = playlist.creator.nickname;
    this.subscribedCount = playlist.subscribedCount;
    this.commentCount = playlist.commentCount;
    this.shareCount = playlist.shareCount;
    this.tracks = playlist.tracks;
  }
}
