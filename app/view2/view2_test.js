'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var SaveRental = $controller('SaveRental');
      expect(SaveRental).toBeDefined();
    }));

  });
});
