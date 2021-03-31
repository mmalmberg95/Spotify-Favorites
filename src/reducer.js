export const initialState = {
    user: null,
    playlists: [], 
    playing: false, 
    item: null,
    headers: null, 
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };
        case 'SET_TOKEN' :
            return{
                ...state, 
                token: action.token
            };

        case 'SET_TOP_TRACKS' :
            return{
                ...state, 
                top_tracks: action.top_tracks
            };

        case 'SET_TOP_ARTISTS' :
            return{
                ...state, 
                top_artists: action.top_artists
            };

            default: 
                return state;
    }
}

export default reducer; 