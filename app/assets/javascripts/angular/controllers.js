contactsApp.controller("ContactsController",
  ['$scope', "$http", "Contact",
  function($scope, $http, Contact) {
    var getAllContacts = function() {
      $scope.contactData = Contact.query();
    }

    getAllContacts();

    $scope.createContact = function(){
      var contact = new Contact($scope.contact);
      // console.log(contact);
      contact.$save().then(function() {
        $scope.contactData.push(contact);
        $scope.contact.name = "";
        $scope.contact.email = "";
        $scope.contact.phone = "";
      });
    };

    $scope.deleteContact = function(id) {
      new Contact({id: id}).$remove().then(function() {
        getAllContacts();
      });
    }
  }
]);

contactsApp.controller("ShowController",
  ['$scope', "$routeParams", "Contact",
  function($scope, $routeParams, Contact) {
    $scope.contact = Contact.get({id: $routeParams.id});
  }
]);

contactsApp.controller("EditController",
  ['$scope', "$routeParams", "$location", "Contact",
  function($scope, $routeParams, $location, Contact) {
    $scope.contact = Contact.get({id: $routeParams.id});
    $scope.updateContact = function() {
      $scope.contact.$update({id: $routeParams.id}).then(function() {
        $location.path('/');
      });
    };
  }
]);