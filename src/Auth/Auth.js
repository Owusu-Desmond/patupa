import authO from 'auth0-js';
import { useNavigate } from 'react-router-dom';

export default class Auth {
  constructor() {
    this.navigate = useNavigate();
    this.userProfile = null;
    this.auth0 = new authO.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile email address phone location',
    });
  }

    login = () => {
      this.auth0.authorize();
    }

    // use promise to handle the authentication result
    handleAuthentication = () => new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          this.navigate('/');
          resolve();
        } else if (err) {
          if (!err.errorDescription === 'state does not match') {
            this.navigate('/');
            alert(`Error: ${err.error}, says ${err.errorDescription}`); // eslint-disable-line no-alert
            reject(err);
          }
        }
      });
    })

    setSession = (authResult) => {
      // set the time that the access token will expire
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }

    // check if the user is authenticated
    isAuthenticated = () => {
      const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }

    // get the user profile
    logout = () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      this.userProfile = null;
      this.auth0.logout({
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        returnTo: 'https://patupa.netlify.app',
      });
    }

    // get user access token
    getAccessToken = () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('No access token found');
      }
      return accessToken;
    }

    getProfile = (cb) => {
      if (this.userProfile) return cb(this.userProfile);
      // expected to return a value at the end of arrow function
      return this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
        if (profile) this.userProfile = profile;
        cb(profile, err);
      });
    }
}
