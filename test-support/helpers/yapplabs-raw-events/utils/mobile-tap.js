import Ember from 'ember';

function EventWithCoords(c) {

  var X = c.left + 1;
  var Y = c.top + 1;
  this.pageX = X;
  this.offsetX = X;
  this.clientX = X;
  this.screenX = X + 5;
  this.pageY = Y;
  this.offsetY = Y;
  this.clientY = Y;
  this.screenY = Y + 95;

}

function EventWithTouches(c) {

  var X = c.left + 1;
  var Y = c.top + 1;
  this.pageX = X;
  this.offsetX = X;
  this.clientX = X;
  this.screenX = X + 5;
  this.pageY = Y;
  this.offsetY = Y;
  this.clientY = Y;
  this.screenY = Y + 95;

  this.touches = [{
    clientX : X,
    clientY : Y
  }];
  this.changedTouches = [{
    clientX : X,
    clientY : Y
  }];

}

export default function mobileTap(selector) {

  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {

    var $element = Ember.$(selector);
    var width = $element.width();
    var height = $element.height();
    var center = {
      top: $element.offset().top + (height / 2),
      left: $element.offset().left + (width / 2)
    };
    var TouchStart = Ember.$.Event('touchstart', new EventWithTouches(center));
    var TouchEnd = Ember.$.Event('touchend', new EventWithTouches(center));
    var Tap = Ember.$.Event('tap', new EventWithTouches(center));
    var Click = Ember.$.Event('click', new EventWithCoords(center));
    $element.trigger(TouchStart);
    $element.trigger(TouchEnd);
    $element.trigger(Tap);
    Ember.run.later((function () {
      $element.trigger(Click);
      Ember.run.later((function () {
        resolve();
      }), 50);
    }), 300);

  });


}
