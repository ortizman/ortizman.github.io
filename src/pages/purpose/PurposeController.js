(function () {

  angular
    .module('purpose')
    .controller('SearchController', [
      '$scope',
      'algolia',
      function ($scope, algolia) {
        var client = algoliasearch("W56683QHIU", "0e76d91342705e662a36888a58460bbd");
        var index = client.initIndex('Airlines');
        $scope.getDatasetsAirlines = function () {
          return {
            source: algolia
              .sources
              .hits(index, {hitsPerPage: 5}),
            //value to be displayed in input control after user's suggestion selection
            displayKey: 'Description',
            //hash of templates used when rendering dataset
            templates: {
              //'suggestion' templating function used to render a single suggestion
              suggestion: function (suggestion) {
                return '<span>' + suggestion._highlightResult.Description.value + '</span><span>' + suggestion._highlightResult.Code.value + '</span>';
              }
            }
          };
        };
        var index = client.initIndex('Fligths');
        $scope.getDatasetsFligths = function () {
          return {
            source: algolia
              .sources
              .hits(index, {hitsPerPage: 5}),
            //value to be displayed in input control after user's suggestion selection
            displayKey: 'Description',
            //hash of templates used when rendering dataset
            templates: {
              //'suggestion' templating function used to render a single suggestion
              suggestion: function (suggestion) {
                return '<span>' + suggestion._highlightResult.ORIGIN.value + '</span> - <span>' + suggestion._highlightResult.ORIGIN_CITY_NAME.value + '</span>';
              }
            }
          };
        };
      }
    ]);

})();
