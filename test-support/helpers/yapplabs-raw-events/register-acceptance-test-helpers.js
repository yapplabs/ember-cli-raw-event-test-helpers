import Ember from 'ember';

// import { wrappedExpectElement,
//          wrappedExpectNoElement,
//          wrappedExpectComponent } from './sync';

// import withinElement from './utils/within-element';

import {
  triggerTapHelper,
  rawTapHelper,
  rawPanHelper,
  rawMouseDownHelper,
  rawMouseUpHelper,
  rawMouseMoveHelper,
} from './async';

export default function(){
  // Ember.Test.registerHelper('expectElement',   wrappedExpectElement);
  // Ember.Test.registerHelper('expectNoElement', wrappedExpectNoElement);
  // Ember.Test.registerHelper('expectComponent', wrappedExpectComponent);

  // Ember.Test.registerHelper('withinElement', withinElement);

  Ember.Test.registerAsyncHelper('triggerTap', triggerTapHelper);
  Ember.Test.registerAsyncHelper('rawTap', rawTapHelper);
  Ember.Test.registerAsyncHelper('rawPan', rawPanHelper);
  Ember.Test.registerAsyncHelper('rawMouseDown', rawMouseDownHelper);
  Ember.Test.registerAsyncHelper('rawMouseUp', rawMouseUpHelper);
  Ember.Test.registerAsyncHelper('rawMouseMove', rawMouseMoveHelper);
}
