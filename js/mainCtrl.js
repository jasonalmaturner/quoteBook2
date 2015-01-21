var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

$scope.getQuotes = function(){
	$scope.list = dataService.getData();
};

$scope.addQuote = function() {
	var quote = {};
	quote.text = $scope.newQuote;
	quote.author = $scope.newAuthor;
	dataService.addData(quote);
	$scope.newQuote = '';
	$scope.newAuthor = '';
};

$scope.removeQuote = function() {
	dataService.removeData($scope.deleteQuote);
	$scope.deleteQuote = '';
	$cookieStore.remove($scope.list.indexOf($scope.deleteQuote));
}

$scope.showAdd = function(){
	$scope.newquote = !$scope.newquote;
	$scope.spliceQuote = false;
	$scope.filter = false;
}

$scope.showRemove = function(){
	$scope.newquote = false;
	$scope.spliceQuote = !$scope.spliceQuote;
	$scope.filter = false;
}

$scope.showFilter = function(){
	$scope.newquote = false;
	$scope.spliceQuote = false;
	$scope.filter = !$scope.filter;
}

$scope.getQuotes();

});