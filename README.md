# ember-cli-raw-event-test-helpers

[![Build Status](https://travis-ci.org/yapplabs/ember-cli-raw-event-test-helpers.svg?branch=master)](https://travis-ci.org/yapplabs/ember-cli-raw-event-test-helpers)

This ember-cli addon supplies a set of acceptance test helpers for triggering low level events.

This particularly comes in handy when you want to test interactions that involve gestures, drag-drop, and the like.

## Helpers

TODO

## Setup

  * Run `ember generate ember-cli-raw-event-test-helpers`
  * Commit any file changes made if your application is under source code management

The generator makes changes to files assuming the structure of them has not changed much from the default version created during the initial Ember application creation. If too many changes have been made you will need to manually make the changes below instead:

  * Add ember-cli-raw-event-test-helpers to your package.json:
  * `npm install --save-dev ember-cli-raw-event-test-helpers`
  * import the registerTestHelpers function in your `tests/helpers/start-app.js`:
  * Add this line to to the top of `start-app.js`:
    * `import registerAcceptanceTestHelpers from './yapplabs-raw-events/register-acceptance-test-helpers';`
  * Register the test helpers:
    * Add this line to `start-app.js` before `App.injectTestHelpers`
    * `registerAcceptanceTestHelpers();`
  * Update your `tests/.jshintrc` file to notify it of the new globals
    that these helpers have added. Add the following lines to the
    `predef` array (after "currentRouteName"):

```
"triggerTap",
"rawMouseDown",
"rawMouseUp",
"rawMouseMove",
"rawPan",
"rawTap"
```

  * You may need to restart your ember server so that it picks up the new .jshintrc file.

## Credits

Major portions of code came from runspired/ember-mobile-touch and 201-created/ember-cli-acceptance-test-helpers. Huge thanks to @runspired and @201-created.
