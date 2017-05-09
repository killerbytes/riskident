'use strict';

describe('Service: notifier', function () {

  // load the service's module
  beforeEach(module('riskidentApp'));

  // instantiate service
  var notifier;
  beforeEach(inject(function (_notifier_) {
    notifier = _notifier_;
  }));

  it('should do something', function () {
    expect(!!notifier).toBe(true);
  });

  it("should get()", function () {
    var item = notifier.get();
    expect(item.length).toBe(0);
  });

  it("should limit()", function () {
    var item = notifier.limit;
    expect(item).toBe(5);
  });

  it("should add()", function () {
    notifier.add({
      title: 'testing',
      content: 'test content',
      type: 'info'
    })
    var item = notifier.get();
    expect(item[0].title).toBe('testing');
    expect(item[0].content).toBe('test content');
    expect(item[0].type).toBe('info');
  });

  it("should remove()", function () {
    notifier.add({
      title: 'testing',
      content: 'test content',
      type: 'info'
    })
    var item = notifier.get();

    notifier.remove(item[0]);

    item = notifier.get();
    expect(item.length).toBe(0);
  });

  it("should removeGroup()", function () {
    notifier.add({title: 'testing'})
    notifier.add({title: 'testing'})
    notifier.add({title: 'testing'})
    notifier.add({title: 'testing'})
    notifier.add({title: 'testing'})
    notifier.add({title: 'testing'})
    notifier.add({title: 'testing'})
    var item = notifier.get();

    notifier.removeGroup();

    item = notifier.get();
    expect(item.length).toBe(4);
  });


});
