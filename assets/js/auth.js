ADMIN = "google-oauth2|116970085465259483479";

window.addEventListener('load', function() {
    var webAuth = new auth0.WebAuth({
        domain: 'philip-scott.auth0.com',
        clientID: 'JBb8WYmHWz50x0s266AgdZhK8p34fplk',
        responseType: 'token id_token',
        audience: 'https://philip-scott.auth0.com/userinfo',
        scope: 'openid profile email',
        redirectUri: window.location.href
    });

    var loginBtn = document.getElementById('login-button');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (isAuthenticated ()) {
            logout ();
        } else {
            webAuth.authorize();
        }
    });

    var loginStatus = document.querySelector('.container h4');
    var loginView = document.getElementById('login-view');
    var homeView = document.getElementById('home-view');

    // buttons and event listeners
    var homeViewBtn = document.getElementById('btn-home-view');

    function handleAuthentication() {
        webAuth.parseHash(function(err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                setSession(authResult);
                console.log (authResult.idToken);
            } else if (err) {
                console.log(err);
            }
            displayButtons();
        });
    }

    function setSession(authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);					
    }

    function logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        displayButtons();
    }

    function isAuthenticated() {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    userProfile;
    handleAdmin = function handleAdmin() {
      if (!userProfile) {
        var accessToken = localStorage.getItem('access_token');
        console.log ("Getting profile");
        webAuth.client.userInfo(accessToken, function(err, profile) {
            userProfile = profile;
            
            if (profile.sub != ADMIN) {
                get("top").innerHTML = "<h1>Admin Only</h1><h2>You are not authorized to access this page</h2>";    
            }
        });
      } else {
      }
    }

    function displayButtons() {
        if (isAuthenticated()) {
            loginBtn.innerHTML = 'Logout';
        } else {
            loginBtn.innerHTML = 'Login';
        }
    }

    handleAuthentication ();
    
    setTimeout(function(){
        if (!isAuthenticated ()) {
            webAuth.authorize();
        }
    }, 1000);
});