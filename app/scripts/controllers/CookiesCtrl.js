(function() {
    function CookiesCtrl($cookies, $uibModalInstance) {
                
        this.setUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        }
    };
    
    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$cookies', '$uibModalInstance', CookiesCtrl]);
})();