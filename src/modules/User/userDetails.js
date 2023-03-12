class userDetails {
    static setUserDetails(token, callback) {
        localStorage.setItem('token', token);
        setTimeout(() => {
            callback();
        }, 1000); // wait 1 second before calling the callback function
    }

    static getUserDetails() {
        return localStorage.getItem('token');
    }

    static clearUserDetails() {
        localStorage.removeItem('token');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        // TODO: check if the token is valid and not expired
        return token !== null;
    }
}

export default userDetails;
