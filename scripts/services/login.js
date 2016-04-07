angular.module("babeladvisor").service("login", [function() {

    this.user = null;

    this.currentUser = function() {
        this.user = localStorage.getItem('user') || null;
        return this.user;
    };

    this.logIn = function(user) {
        this.user = localStorage.setItem('user', user);
    };

    this.logout = function() {
        localStorage.removeItem('user');
        this.user = null;
    };
}])
