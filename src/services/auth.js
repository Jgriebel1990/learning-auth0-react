import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'jeffersongriebel.auth0.com',
        clientID: 'oWRmRMecEs6YtLrUs2YGvA_QFf3F9uma',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://jeffersongriebel.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}

export default Auth;