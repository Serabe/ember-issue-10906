import Ember from 'ember';

export default Ember.Service.extend({
    init(...args) {
        this._super(...args);
        this.set('logs', Ember.A([]));
    }
});
