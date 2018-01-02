// import {SAVE_COMMENT} from './types'

// export function saveComment(comment) {
//     return {
//         type: SAVE_COMMENT,
//         payload: comment
//     };
// }

import { CHANGE_AUTH } from './types'

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}