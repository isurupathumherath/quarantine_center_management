var UserProfile = (function () {
    var full_name = "";
    var userID = "";
    var orderTotal = "";
    var bookingTotal = "";

    var getName = function () {
        return full_name;    // Or pull this from cookie/localStorage
    };
    var getuserID = function () {
        return userID;    // Or pull this from cookie/localStorage
    };
    var getorderTotal = function () {
        return orderTotal;    // Or pull this from cookie/localStorage
    };
    var getbookingTotal = function () {
        return bookingTotal;    // Or pull this from cookie/localStorage
    };

    var setName = function (name) {
        full_name = name;
        // Also set this in cookie/localStorage
    };
    var setuserID = function (userid) {
        userID = userid;
        // Also set this in cookie/localStorage
    };
    var setorderTotal = function (ototal) {
        orderTotal = ototal;
        // Also set this in cookie/localStorage
    };
    var setbookingTotal = function (btotal) {
        bookingTotal = btotal;
        // Also set this in cookie/localStorage
    };


    return {
        getName: getName,
        setName: setName,
        getuserID: getuserID,
        setuserID: setuserID,
        getorderTotal: getorderTotal,
        setorderTotal: setorderTotal,
        getbookingTotal: getbookingTotal,
        setbookingTotal: setbookingTotal
    }

})();

export default UserProfile;