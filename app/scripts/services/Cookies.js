(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                // Modal configuration object properties
                controller: 'CookiesCtrl',
                controllerAs: '$cookies',
                templateUrl: '/templates/cookies.html',
                size: 'med'
            });
        }
    };
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();