import Ember from 'ember';

function EventWithCoords(c) {

  const X = c.left + 1;
  const Y = c.top + 1;
  this.pageX = X;
  this.offsetX = X;
  this.clientX = X;
  this.screenX = X + 5;
  this.pageY = Y;
  this.offsetY = Y;
  this.clientY = Y;
  this.screenY = Y + 95;

}

export default function desktopTap(selector) {

  return new Ember.RSVP.Promise(function(resolve /*, reject*/) {

    const $element = Ember.$(selector);
    const width = $element.width();
    const height = $element.height();
    const center = {
      top: $element.offset().top + (height / 2),
      left: $element.offset().left + (width / 2)
    };
    const MouseDown = Ember.$.Event('mousedown', new EventWithCoords(center));
    const MouseUp = Ember.$.Event('mouseup', new EventWithCoords(center));
    const Tap = Ember.$.Event('tap', new EventWithCoords(center));
    const Click = Ember.$.Event('click', new EventWithCoords(center));
    Click.isDesktop = true;
    $element.trigger(MouseDown);
    $element.trigger(MouseUp);
    $element.trigger(Tap);
    $element.trigger(Click);
    Ember.run.later((function () {
      resolve();
    }), 100);
  });
}
