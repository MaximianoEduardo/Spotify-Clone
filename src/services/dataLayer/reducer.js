export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

}
// Empty DataLayer

const reducer = (state, action) => {

    console.log(action)

    // Action => type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }

}

// Action => How manipulate State looks (setState)
// State => How they look

export default reducer