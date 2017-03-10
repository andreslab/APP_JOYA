angular.module('starter.controllers', [])

.controller('StoreCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('js/data.json')
  .success(function(data){
    $scope.store = data.store;
  });
  //console.log("store detail");
}])

.controller('StoreDetailCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('js/data.json')
  .success(function(data){
    //$state pasa el stado o parametros que se pasan 
   $scope.item = data.store[$state.params.id];
  });
  //console.log("store detail");
}])

.controller('AccountCtrl', function($scope){
  console.log("account");
})

.controller('LoginCtrl', function($score){
  console.log("login");
})

.controller('CashCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('js/data.json')
  .success(function(data){
    $scope.paid = data.transaction;
  });
  //console.log("store detail");
}])

.controller('CashDetailCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('js/data.json')
  .success(function(data){
    //$state pasa el stado o parametros que se pasan 
   $scope.item = data.transaction[$state.params.id];
  });
  //console.log("store detail");
}])

//----------------------------------------------
/*
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('StoreDetailCtrl',function($scope, $stateParams, Store){
  $scope.Store = Store.get($stateParams.storeId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});*/
