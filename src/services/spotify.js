// Spotify Endpoint

// Click login
// Redirect to Spotify login page
// Redirect to home page after logged in

export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:3000/'

const clientID = '1b302f8a701f424ea9e9338ab3681300'

// Scopes basic preset what is possible to do (security, and anothers stuffs)
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

export const getTokenFromResponse = () => {

    return (
        window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
    )

}

const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export default loginUrl