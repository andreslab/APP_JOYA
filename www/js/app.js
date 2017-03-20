// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','chart.js','starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");
   $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:


  .state('tab.store', {
      url: '/store',
      views: {
        'tab-store': {
          templateUrl: 'templates/tab-store.html',
          controller: 'StoreCtrl'
        }
      }
    })

    .state('tab.detail-store',{
      url:'/detail/:id',
      views: {
        'detail-store':{
            templateUrl: 'templates/detail-store.html',
            controller: 'StoreDetailCtrl'
        }
      }
    })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('tab.cash',{
    url:'/cash',
    views:{
      'tab-cash':{
        templateUrl: 'templates/tab-cash.html',
        controller: 'CashCtrl'
      }
    }
  })
   .state('tab.detail-cash',{
    url:'/detailcash/:id',
    views:{
      'detail-cash':{
        templateUrl: 'templates/detail-cash.html',
        controller: 'CashDetailCtrl'
      }
    }
  })
  .state('tab.chart',{
    url:'/chart',
    views:{
      'tab-chart':{
        templateUrl: 'templates/tab-charts.html',
        controller: 'LineCtrl'
      }
    }
  })
  .state('tab.user',{
    url:'/user',
    views:{
      'tab-user':{
        templateUrl: 'templates/tab-user.html',
        controller: 'UserCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/store');

});

//notificationes firebase android
window.FirebasePlugin.onNotificationOpen(function(notification) {
    console.log(notification);
}, function(error) {
    console.error(error);
});

//notificaciones firebase ios
window.FirebasePlugin.grantPermission();