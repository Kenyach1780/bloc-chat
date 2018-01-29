(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
//        Message.all = messages;
        
        Message.getByRoomId = function(roomId) {
            // Filter the messages by their room ID.
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        
        Message.send = function(newMessage, roomId, username) {
            messages.$add({
                content: newMessage,
                roomId: roomId,
                username: username,
                sentAt: Date.now()
            });
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();