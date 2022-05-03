export const initialState = {
    user : null, // user data
    playlists : [], // playlist info
    playing : false, // is it playing or not
    item : null,
    // if we want to logg in every time we start our application in development env we can pste here real token after logging in 1 time and it will not ask it for 2nd time so we can bypass auth to spotify here.
    //token : null
    discover_weekly: null,
    spotify: null, 
    top_artists: null
}

const reducer = (state , action) => {
    console.log(action);

    // Action will be having type and payload
    switch(action.type) {
        case 'SET_USER': // this is called action listener  
            return{
                // take the existing property and change user to given user.
                ...state,
                user : action.user
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };        
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }    
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists
            }    
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };        
        default:
            return state;    
    }
}

export default reducer;