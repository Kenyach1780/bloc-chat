(function() {
    function HomeCtrl(Room, $uibModal) {
        
        this.roomsList = Room.all;
//        Room.add("room5");
        
        this.newRoomClick = function() {
            $uibModal.open({
                controller: 'CreateRoomCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/templates/newRoom.html',
                backdrop: 'static',
//                resolve: {
//                    roomsList: function() {
//                        return roomsList;
//                    }
//                }
            });
        }
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();