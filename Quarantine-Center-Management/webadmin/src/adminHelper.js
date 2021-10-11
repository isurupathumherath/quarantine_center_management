//save login response > (user's name and token) to session storage
export const authenticate = (next) => {
    const admin = "admin";
    if (window !== 'undefined') {
        sessionStorage.setItem('user', JSON.stringify(admin));
    }
    next();
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
        sessionStorage.removeItem('user');
    }
    // next();
};
