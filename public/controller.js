var socket = io.connect();
var nameg;

myapp.controller("ctrl1",function($scope,$location){
    $scope.login = function(path) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    nameg = name.value;
    $location.path( path );
    }
});
myapp.controller("ctrl2",['$scope',function($scope){

        $scope.messages = []
        socket.on('new message', function(data,name1){
        $scope.messages.push({"name" : name1 , "message" : data});
        $scope.$apply();

  });

    $scope.myFunc = function(e) {
      e.preventDefault();
      var msg = document.getElementById('message');
      socket.emit('send message',msg.value,nameg);
      msg.value = '';



    };

}]);
