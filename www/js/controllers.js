angular.module('starter.controllers', [])

.controller('StoreCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  //$http.get('js/data.json')
  $http.get('https://www.lajoya.ec/wp-json/api/v1/casas')
  .success(function(data){
    $scope.store = data.data;
  });
  //console.log("store detail");
}])

.controller('StoreDetailCtrl', ['$scope','chart.js', '$http', '$state', function($scope, $http, $state){
  //$http.get('js/data.json')
  $http.get('https://www.lajoya.ec/wp-json/api/v1/casas')
  .success(function(data_filter){
    //$state pasa el stado o parametros que se pasan 
    let colect = data_filter.data;
    colect.forEach(element =>{
      if(element.ID ==  $state.params.id){
        $scope.item = element;
      }
    });
   //$scope.item = data_filter.data[$state.params.id]; //usaba el id que no tenia un orden sino numeros aleatorios
    //$scope.item = data_filter.data[0]; // usa el orden de la lista
  });
  //console.log("store detail");
}])

.controller('AccountCtrl', function($scope){
  console.log("account");
})

.controller('LoginCtrl', function($scope){
  console.log("login");
  $scope.sendForm = function(){
    console.log('entro al login');
    if(true){
      window.location.href='#/tab/chart';
    }
  }
})
.controller('LineCtrl',function($scope){
  //console.log('CHART');
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }/*, { yAxisID: 'y-axis-2' }*/];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        /*{
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }*/
      ]
    }
  };
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
