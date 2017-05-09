'use strict';

/**
 * @ngdoc service
 * @name riskidentApp.notifier
 * @description
 * # notifier
 * Factory in the riskidentApp.
 */
angular.module('riskidentApp')
  .factory('notifier', function ($filter) {
    var notifications = [];
    var counter = 0;
    var _limit = 5;

    /**
    * @ngdoc
    * @name riskidentApp.notifier#add
    * @methodOf riskidentApp.notifier
    *
    * @description
    * Method to add notification from the notification list
    * @example
    * notifier.get(item);
    * @param {Object} entity notification
    */
    function add(item){
      counter++;
      notifications.push({
        id: counter,
        title: item.title,
        type: item.type,
        content: item.content
      })
    }

    /**
    * @ngdoc
    * @name riskidentApp.notifier#remove
    * @methodOf riskidentApp.notifier
    *
    * @description
    * Method to remove item from the notification list
    * @example
    * notifier.remove(item);
    * @param {Object} entity item
    */

    function remove(item){
      notifications = $filter('filter')(notifications, function(i){
         return item.id !== i.id;
      })
    }

    /**
    * @ngdoc
    * @name riskidentApp.notifier#removeGroup
    * @methodOf riskidentApp.notifier
    *
    * @description
    * Method to remove the grouped notification from the notification list
    * @example
    * notifier.removeGroup();
    */
    function removeGroup(){
      notifications = notifications.slice(notifications.length - (_limit -1));
    }

    /**
    * @ngdoc
    * @name riskidentApp.notifier#get
    * @methodOf riskidentApp.notifier
    *
    * @description
    * Method to get the notification list
    * @example
    * notifier.get();
    * @returns {array} notification list
    */
    function get(){
      return notifications;
    }


    return {
      add: add,
      remove: remove,
      removeGroup: removeGroup,
      get: get,
      limit: _limit
    };
  });
