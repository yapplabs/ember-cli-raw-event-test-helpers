/* globals MouseEvent */

import Ember from 'ember';

function createTouchEvent(name, x, y /*, identifier*/) {
  const event = new MouseEvent(name, {
    view: window,
    bubbles: true,
    cancelable: true,
    button: 0,
    clientX: x,
    clientY: y,
    screenX: x,
    screenY: y
  });

  return event;
}

function dispatchTouchEvent(el, name, x, y) {
  const event = createTouchEvent(name, x, y);
  el.dispatchEvent(event);
}

function elementCoordinates($element) {
  const width = $element.width();
  const height = $element.height();
  const offset = $element.offset();
  return {
    x: offset.left + (width / 2),
    y: offset.top + (height / 2)
  };
}

export function rawTap(selector, offsetFromCenter = null) {

  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {
    const $element = Ember.$(selector);
    const center = elementCoordinates($element);
    if (offsetFromCenter) {
      center.x = center.x + offsetFromCenter.x;
      center.y = center.y + offsetFromCenter.y;
    }

    dispatchTouchEvent($element[0], 'mousedown', center.x, center.y);
    dispatchTouchEvent($element[0], 'mouseup', center.x, center.y);
    Ember.run.later(() => {
      resolve();
    }, 100);

  });
}

export function rawPan(selector, deltaX, deltaY) {

  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {
    const $element = Ember.$(selector);
    const begin = elementCoordinates($element);
    const end = {
      x: begin.x + deltaX,
      y: begin.y + deltaY
    };

    dispatchTouchEvent($element[0], 'mousedown', begin.x, begin.y);
    dispatchTouchEvent($element[0], 'mousemove', begin.x, begin.y);

    Ember.run.later(() => {
      dispatchTouchEvent($element[0], 'mousemove', end.x, end.y);

      Ember.run.later(() => {
        dispatchTouchEvent($element[0], 'mousemove', end.x, end.y);
        dispatchTouchEvent($element[0], 'mouseup', end.x, end.y);

        Ember.run.later(() => {
          resolve();
        }, 100);
      }, 100);
    }, 100);

  });
}

export function rawMouseDown(selector) {
  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {
    const $element = Ember.$(selector);
    const coords = elementCoordinates($element);
    dispatchTouchEvent($element[0], 'mousedown', coords.x, coords.y);
    Ember.run.later(() => {
      resolve();
    }, 100);
  });
}

export function rawMouseUp(selector) {
  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {
    const $element = Ember.$(selector);
    const coords = elementCoordinates($element);
    dispatchTouchEvent($element[0], 'mouseup', coords.x, coords.y);
    Ember.run.later(() => {
      resolve();
    }, 100);
  });
}

export function rawMouseMove(selector, deltaX, deltaY) {
  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {
    const $element = Ember.$(selector);
    const begin = elementCoordinates($element);
    const end = {
      x: begin.x + deltaX,
      y: begin.y + deltaY
    };

    dispatchTouchEvent($element[0], 'mousemove', begin.x, begin.y);
    Ember.run.later(() => {
      dispatchTouchEvent($element[0], 'mousemove', end.x, end.y);
      Ember.run.later(() => {
        resolve();
      }, 100);
    }, 100);
  });
}
