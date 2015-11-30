app.controller("InsertLinkController", function ($scope){
    $scope.tagsChange = function(){
        var tagString = $scope.data_tags;
        $scope.tags = tagString.split(",");
    }

    $scope.removeTag = function(index){
    }
});
