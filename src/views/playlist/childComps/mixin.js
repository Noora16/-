import { getPlaylistDetail, PlaylistInfo } from 'network/playlist.js'

export const myMixin = {
  data() {
    return {
      playlistInfo: {},
      tracks: []
    }
  },
  created() {
    this.getPlaylistDetail(this.$route.params.playlistId)
  },
  methods: {
    getPlaylistDetail(playlistId) {
      getPlaylistDetail(playlistId).then(res => {
        this.playlistInfo = new PlaylistInfo(res.data.playlist);
        this.tracks = this.playlistInfo.tracks;
      })
    }
  }
}