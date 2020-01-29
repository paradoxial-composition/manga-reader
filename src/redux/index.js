import store from './store'
import {
  addManga,
  addAnime
} from './actions/index'

window.store = store;
window.addAnime = addAnime
window.addManga = addManga