// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-five-mu.vercel.app/player/";
const clientId = "ca184d79c55d4bb5a1b0bb47a1cd744a";

// Scope are the operations user will be able to perform which they will see when they click on login and after auth they will see as a tab as "View your activity on spotify"
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20" // Ascii code for space
)}&response_type=token&show_dialog=true`; // it will give us back auth token back and will open a dialog box
// if here show dialog is false it will not open a dialog box for login.

// after successful auth it will give us back auth token in url lets get it from URL then.

export const getTokenFromURl = () => {
    //  it will go to url and find position of # (hash)
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
}