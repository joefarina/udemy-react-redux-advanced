import { SAVE_COMMENT } from '../actions/types'

export default function(state = [], action) {
    switch(action.type) {
        case 'save_comment':
            return [
                ...state, action.payload
            ];
        default: return state
    }
}

