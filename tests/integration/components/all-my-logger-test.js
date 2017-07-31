import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-my-logger', 'Integration | Component | all my logger', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-my-logger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-my-logger}}
      template block text
    {{/all-my-logger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
