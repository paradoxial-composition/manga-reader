import {
  ADD_MANGA,
  ADD_ANIME
} from '../constants/action-types'

const initialState = {
  mangas: [
    {
			type: 'manga',
			cover: 'https://i0.wp.com/dawnofonepiece.com/wp-content/uploads/2018/11/110841rryy81n1yrtp9yn2.jpg?resize=561%2C853',
			title: 'One Piece',
			details: {
				chapter : '950',
				totalPages: '17'
			}
    },
    {
			type: 'manga',
			cover: 'https://media.senscritique.com/media/000004667146/source_big/Alice_in_Borderland.jpg',
			title: 'Imawa no kuni no arisu',
			details: {
				chapter : '55',
				totalPages: '30'
			}
		}
  ],
  animes: [
    {
			type: 'anime',
			cover: 'https://ctl.s6img.com/society6/img/Rdbjgv96VDCjSofC5eNKUBB9Q_8/w_700/duvet-covers/swatch/~artwork,fw_6000,fh_6000,iw_6000,ih_6000/s6-0065/a/26881068_3886466/~~/tokyo-ghouls-anime-cool-cosplay-duvet-covers.jpg',
			title: 'Tokyo Ghoul',
			details: {
				episode : '11',
				duration: '20'
			}
    },
    {
			type: 'anime',
			cover: 'https://image.animedigitalnetwork.fr/license/mha/tv/web/affiche_370x0.jpg',
			title: 'Bokuno Hero Academia',
			details: {
				episode : '11',
				duration: '20'
			}
    },
    {
			type: 'anime',
			cover: 'https://upload.wikimedia.org/wikipedia/en/0/0f/One_Piece_Season_18_poster_Zou.jpeg',
			title: 'One Piece',
			details: {
				episode : '933',
				duration: '20'
			}
		},
  ]
}

function rootReducer( state = initialState, action) {
  if(action.type == ADD_MANGA) {
    return Object.assign( {}, state, {
      mangas: action.payload
    })
  }

  if(action.type == ADD_ANIME) {
    return Object.assign( {}, state, {
      animes: action.payload
    })
  }

  return state
}

export default rootReducer