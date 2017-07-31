import Ember from 'ember';

export default Ember.Component.extend({
    logger: Ember.inject.service(),
    logs: Ember.computed.alias('logger.logs'),
    action: {
        clearLogs() {
            this.get('logs').clear();
        }
    }
});
