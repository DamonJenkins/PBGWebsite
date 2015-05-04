angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {videoUrl: "https://www.youtube.com/watch?v=17N4xfw9tcE", imgUrl: "https://i.ytimg.com/vi/17N4xfw9tcE/hqdefault.jpg?w=240&h=136&sigh=01JQL2oIPmX_Bn4fd9PD8LxtbRk", name:"PBG Play: GTA V PC",players:"Damon, Rugby, Alistair"},
        {videoUrl:"https://www.youtube.com/watch?v=6jSbfzKfImI",imgUrl:"https://i.ytimg.com/vi/6jSbfzKfImI/hqdefault.jpg?w=240&h=136&sigh=hxz9tcA02HPCXN8_VHV3uhOLMqU",name:"PBG Play: Orion - Awaiting Perry's Demise",players:"Perry, Damon, Rugby, Alistair"},
        {videoUrl:"https://www.youtube.com/watch?v=wJRh1Z1muuc", imgUrl:"https://i.ytimg.com/vi/wJRh1Z1muuc/hqdefault.jpg?w=240&h=136&sigh=SfkfWcybmeFa-yIt9NBtR5LzmBo",name:"PBG Play: Payday 2; Do As You're Told",players:"Rugby"}
    ];
});
