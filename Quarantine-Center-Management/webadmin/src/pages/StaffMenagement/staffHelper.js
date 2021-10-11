//save login response > (user's name and token) to session storage
export const authenticate = (response, next) => {
    if (window !== 'undefined') {
        // console.log('authenticate', response)
        sessionStorage.setItem('token', JSON.stringify(response.data));
        sessionStorage.setItem('userId', JSON.stringify(response.data.employeeId));
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
export const getUser = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('userId')) {
            return JSON.parse(sessionStorage.getItem('userId'));
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
        sessionStorage.removeItem('userId');
    }
    // next();
};
