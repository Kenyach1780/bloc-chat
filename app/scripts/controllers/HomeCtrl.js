(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        
        this.roomsList = Room.all;
//        Room.add("room5");
                
        this.activeRoom = null;
        
//        this.newMessage = null;
        
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
        
        this.sendMessage = function(newMessage) {
//            this.newMessage = null;
            var message = {
                username: this.username,
                content: this.newMessage,
                sentAt: Date.now(),
                roomId: this.activeRoom.$value
            }
            
            Message.send(newMessage);
//            this.newMessage = "";
            console.log(message);
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

//, this.activeRoom.$id