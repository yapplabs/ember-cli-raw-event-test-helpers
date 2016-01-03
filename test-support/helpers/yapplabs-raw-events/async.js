import Ember from "ember";
import tap from './utils/tap';
import {
  rawTap,
  rawPan,
  rawMouseDown,
  rawMouseUp,
  rawMouseMove
} from './utils/raw-events';

// Send a tap or a click depending on if we think we're mobile or not.
export function triggerTapHelper(app, selector) {
  Ember.assert('helper must be given a selector', !!selector);
  findWithAssert(selector);
  tap(selector);
  return app.testHelpers.wait();
}

export function rawTapHelper(app, selector, offsetFromCenter = null) {
  Ember.assert('helper must be given a selector', !!selector);
  findWithAssert(selector);
  rawTap(selector, offsetFromCenter);
  return app.testHelpers.wait();
}

export function rawPanHelper(app, selector, deltaX, deltaY) {
  Ember.assert('helper must be given a selector', !!selector);
  findWithAssert(selector);
  rawPan(selector, deltaX, deltaY);
  return app.testHelpers.wait();
}

export function rawMouseDownHelper(app, selector) {
  Ember.assert('helper must be given a selector', !!selector);
  findWithAssert(selector);
  rawMouseDown(selector);
  return app.testHelpers.wait();
}

export function rawMouseUpHelper(app, selector) {
  Ember.assert('helper must be given a selector', !!selector);
  findWithAssert(selector);
  rawMouseUp(selector);
  return app.testHelpers.wait();
}

export function rawMouseMoveHelper(app, selector, deltaX, deltaY) {
  Ember.assert('helper must be given a selector', !!selector);
  findWithAssert(selector);
  rawMouseMove(selector, deltaX, deltaY);
  return app.testHelpers.wait();
}
