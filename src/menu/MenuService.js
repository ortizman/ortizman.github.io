(function(){
  'use strict';

  angular.module('menu')
         .service('menuService', ['$q', MenuService]);

  /**
   * Menu DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadMenu: Function}}
   * @constructor
   */
  function MenuService($q){
    var menuItems = [
      {
        title: 'Search engine',
        href: '#!/purpose',
        colorHex: 'A53434'
      }
    ];

    // Promise-based API
    return {
      loadMenu : function() {
        // Simulate async nature of real remote calls
        return $q.when(menuItems);
      }
    };
  }

})();
