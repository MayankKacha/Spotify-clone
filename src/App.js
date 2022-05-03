import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromURl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

const spotify = new SpotifyWebApi();

function App() {

  const [token , setToken ] = useState(null); //initial null value will be there so
  const [{user}, dispatch] = useDataLayerValue(); // in here first arg will be param or values we will be needing from datalayer context and 2nd value will be dispatch which will be used to dispatch to datalayer

  // this will run the code based on given condition
  useEffect(() => {
      const hash = getTokenFromURl();
      window.location.hash = ""; // we are removing the key from link so that user dont see it
      const _token = hash.access_token;
      if(_token){

        // This will take token and dispatch it to datalayer
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
  
        setToken(_token);
        spotify.setAccessToken(_token); // setting token to spotify api

        spotify.getMe().then(_user => {
          

          // we are dispatching user details in to datalayer (saving in to the datalayer)
          dispatch({
            type: 'SET_USER',
            user: _user
          })

        }); // this get me returns a promise and returns user which we will use

        spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
        );

        dispatch({
          type: "SET_SPOTIFY",
          spotify: spotify,
        });

        spotify.getUserPlaylists().then((_playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: _playlists ,
          });
          console.log('playlist ', _playlists);
        });

        spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        });
      }
      //console.log("I have a token ", _token);
  }, [token, dispatch]); // here we put params so that whenever they changes this block of code also runs.
  

  // to check wheather the value of user has been saved in datalayer or not we can call user form data layer by doing this , const [{user}, dispatch] = useDataLayerValue(); and then here we can console log user from datalayer as below,...

  //console.log('I am user ', user);

  return (
    //<Router>
      
        <React.Fragment>
        <div className="app">
        <Routes>
          {
            token ? (
              <Route path="/player" element={<Player spotify={spotify} />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )
          }
          <Route path='/' element={<Login />} />
          {/* Spotify Logo */}
          {/*Login with spotify button */}
          {/* <Login /> */}
          </Routes>
        </div>
      </React.Fragment>
      
    //</Router>
  );
}

export default App;
