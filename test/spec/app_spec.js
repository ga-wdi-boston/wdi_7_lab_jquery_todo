'use strict';

jasmine.getFixtures().fixturesPath = 'test/fixtures/';

describe('basic test functions', function() {
  it('will see if it can see a list', function(){
    setFixtures("<ul></ul>");
    expect($('ul')).toExist();
    expect($('p')).not.toExist();
  });
});
describe('list', function(){
  it('adds a list item', function(){
    setFixtures("<ul id='list'></ul>");
    addItem($('#list'),'dog');
    expect($('li')).toExist();
    expect($('li')).toContainText('dog');
  });
  it('adds lets you fill in and submit an item', function(){
    setFixtures("<input id='task'></input><ul id='list'></ul>");
    $('#task').val('stuff');
    $('#task').submit();
    expect($('li')).toExist();
    expect($('li')).toContainText('stuff');
  });
});
