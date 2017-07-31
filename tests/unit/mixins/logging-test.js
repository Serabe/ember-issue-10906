import Ember from 'ember';
import LoggingMixin from 'ember-issue-10906/mixins/logging';
import { module, test } from 'qunit';

module('Unit | Mixin | logging');

// Replace this with your real tests.
test('it works', function(assert) {
  let LoggingObject = Ember.Object.extend(LoggingMixin);
  let subject = LoggingObject.create();
  assert.ok(subject);
});
