export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Token just for develop
    //token: 'BQDnnwDHI-ofhB5XSmM7m04CrEkUl6AYvL28Fn8AMcdJcdPkSaDl_g0k2MAPsyP_MdKegygpvJTDZ2mhaQZqqbhsRq2tvqi3UtCq1dxdj1ggQkAj992vFiHgO8Yi7FE1VCBllg1ZJoxxlIpfwbD3d8R3tW3y'
    token: null
}
// Empty DataLayer

const reducer = (state, action) => {

    console.log('Action: ', action)

    // Action => type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state
    }

}

// Action => How manipulate State looks (setState)
// State => How they look

export default reducer