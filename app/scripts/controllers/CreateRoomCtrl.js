(function() {
    function CreateRoomCtrl(Room, $uibModalInstance) {
        
        this.newRoom = "";
                
        this.create = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        }
                        
        // Closes the modal
        this.cancel = function() {
            $uibModalInstance.close('cancel');
        }
         
    }
    
    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['Room', '$uibModalInstance', CreateRoomCtrl]);
})();