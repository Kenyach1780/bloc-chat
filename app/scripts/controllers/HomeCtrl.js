(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        
        this.roomsList = Room.all;
//        Room.add("room5");
                
        this.activeRoom = null;
        
        this.newRoomClick = function() {
            $uibModal.open({
                controller: 'CreateRoomCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/templates/newRoom.html',
                backdrop: 'static',
            });
        }
        
        this.chosenRoom = function(room) {
            this.activeRoom = room;
            this.messages = Message.getByRoomId(room.$id);
            console.log(room);
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();