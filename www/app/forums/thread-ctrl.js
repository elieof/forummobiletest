(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('ThreadCtrl', ['$state','$scope','$http', '$ionicActionSheet', 'eliteApi', ThreadCtrl]);

    function ThreadCtrl($state, $scope,$http, $ionicActionSheet,  eliteApi) {
        var vm = this;
        
        var data = eliteApi.getLeagues();




        var dataThread = eliteApi.getThread();

        console.log(dataThread);
        vm.leagues = data;

        vm.selectLeague = function(id){
            $state.go("app.teams");
        }

        $scope.bookmark = function(){
          console.log('bookmark');
        };

        $scope.comment = function(){
          console.log('comment');
        };

        $scope.like = function(){
          console.log('like');
        };

        $scope.dislike = function(){
          console.log('dislike');
        };


        $scope.showShareForm = function() {
          
          $ionicActionSheet.show({
            titleText: 'Share',
            buttons: [
              { text: 'Facebook <i class="icon ion-social-facebook-outline"></i>' },
              { text: 'Linkedin <i class="icon ion-social-linkedin-outline"></i>' },
              { text: 'Google <i class="icon ion-social-googleplus-outline"></i>' },
              { text: 'Twitter <i class="icon ion-social-twitter-outline"></i>' },
              { text: 'Mail <i class="icon ion-ios7-email-outline"></i>' },
            ],
            //destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function() {
              console.log('CANCELLED');
            },
            buttonClicked: function(index) {
              console.log('BUTTON CLICKED', index);
              return true;
            },
            destructiveButtonClicked: function() {
              console.log('DESTRUCT');
              return true;
            }
          });
        };


      $scope.showNoteForm = function() {
        
        $ionicActionSheet.show({
          titleText: 'Noter',
          buttons: [
            { text: '1' },
            { text: '2' },
            { text: '3' },
            { text: '4' },
            { text: '5' },
            
          ],
          
          cancelText: 'Cancel',
          cancel: function() {
            console.log('CANCELLED');
          },
          buttonClicked: function(index) {
            console.log('BUTTON CLICKED', index);
            return true;
          },
          destructiveButtonClicked: function() {
            console.log('DESTRUCT');
            return true;
          }
        });
      };



    };
})();