import Vue from 'vue'
import VueRouter from 'vue-router'
const Discover = () => import('views/discover/Discover') 
const Podcast = () => import('views/podcast/Podcast') 
const Profile = () => import('views/profile/Profile')
const Karaoke = () => import('views/karaoke/Karaoke')
const Friends = () => import('views/friends/Friends')
const Search = () => import('views/search/Search')
const Playlist = () => import('views/playlist/Playlist')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/discover'
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/podcast',
    component: Podcast
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/karaoke',
    component: Karaoke
  },
  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/playlist/:playlistId',
    component: Playlist,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
