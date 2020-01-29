import {
  ADD_MANGA,
  ADD_ANIME
} from '../constants/action-types'

export function addManga(payload) {
  return {type: ADD_MANGA, payload}
}

export function addAnime(payload) {
  return {type: ADD_ANIME, payload}
}