(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        
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
            console.log(this.messages);
        }
        
        this.sendMessage = function() {
            Message.send(this.newMessage, this.activeRoom.$id, $cookies.get('blocChatCurrentUser'));
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();