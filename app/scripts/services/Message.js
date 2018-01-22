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
        
        Message.send = function(newMessage) {
            // Send method logic
            messages.$add(newMessage).then(function(ref) {

//                var Message = ref.roomId;
//                console.log(message);
            });
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();