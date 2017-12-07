(function() {
    function HomeCtrl(Room) {
        this.roomsList = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();