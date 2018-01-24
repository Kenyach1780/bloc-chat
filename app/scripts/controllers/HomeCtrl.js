(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        
        this.roomsList = Room.all;
//        Room.add("room5");
                
        this.activeRoom = null;
        
        this.messages = null;
        
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
//            console.log(room);
        }
        
        this.sendMessage = function() {

            var message = {
//                username: this.username,
                content: this.message,
//                sentAt: Date.now(),
//                roomId: this.roomId
            }
            
            Message.send(message);
            console.log(message);
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

//, this.activeRoom.$id