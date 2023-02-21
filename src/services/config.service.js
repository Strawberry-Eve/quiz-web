angular.module("app").factory("ConfigService", [
   function () {
      var service = {};

      service.apiBase = "http://quizapieht-env.eba-3svxethm.eu-west-2.elasticbeanstalk.com/";

      return service;
   },
]);
