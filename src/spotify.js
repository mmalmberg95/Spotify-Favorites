export const authEndpoint = 
"https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "2601815643704ac9994e66a36a0d8605";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-modify-private"
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial; 
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20"
)}&response_type=token&show_dialog=true`; 

//change dialog to false to redirect directly to redirect_uri


  