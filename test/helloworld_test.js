(function ($) {
  module('jQuery#HelloWorld', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.HelloWorld(), this.elems, 'should be chainable');
  });

  test('is HelloWorld', function () {
    expect(1);
    strictEqual(this.elems.HelloWorld().text(), 'HelloWorld0HelloWorld1HelloWorld2', 'should be HelloWorld');
  });

}(jQuery));
