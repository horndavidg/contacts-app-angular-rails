contactsApp.service('Contact', ['$resource', function($resource) {
  return $resource(
    "/contacts/:id.json",
    {id: "@id"},
    {update: {method: "PUT"}} 
  );
}]);