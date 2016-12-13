var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe ('Timer', () => {

  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    setTimeout(() => {
      expect(timer.state.count).toBe(3);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 3001);
  });

  it('should pause countdown on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    setTimeout(() => {
      timer.handleStatusChange('paused');
    }, 1001);

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1001);
  });

  it('should clear count on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    setTimeout(() => {
      timer.handleStatusChange('stopped');
    }, 1001);

    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    }, 1001);
  });

});
