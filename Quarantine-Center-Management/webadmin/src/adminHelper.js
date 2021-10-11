//save login response > (user's name and token) to session storage
export const authenticate = (next) => {
    const admin = "admin";
    if (window !== 'undefined') {
        sessionStorage.setItem('user', JSON.stringify(admin));
    }
    next();
};

//access access name from session storage
export const getToken = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token'));
        }
        else {
            return false;
        }
    }
};

//access user's name from session storage
export const getAdminUser = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('user')) {
            return JSON.parse(sessionStorage.getItem('user'));
        }
        else {
            return false;
        }
    }
};


//remove token from session storage
export const logout = next => {
    if (window !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    }
    // next();
};
