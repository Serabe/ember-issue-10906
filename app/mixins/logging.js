import Ember from 'ember';

export default Ember.Mixin.create({
    logger: Ember.inject.service(),
    enter: loggingAlias('enter (private)'),
    exit: loggingAlias('exit (private)'),
    activate: loggingAlias('activate'),
    deactivate: loggingAlias('deactivate'),
    serialize: loggingAlias('serialize'),
    deserialize: loggingAlias('deserialize (private)'),
    model: loggingAlias('model'),
    setupController: loggingAlias('setupController'),
    afterModel: loggingAlias('afterModel'),
    beforeModel: loggingAlias('beforeModel'),
    renderTemplate: loggingAlias('renderTemplate'),
    redirect: loggingAlias('redirect'),
    actions: {
        didTransition: loggingAlias('didTransition')
  }
});

function loggingAlias(property){
  return function(){
    let logs = this.get('logger.logs');
    logs.pushObject(`${this._debugContainerKey} ${property}`);
    
    logs.pushObject('URl (window.location.href):' + window.location.href);
    logs.pushObject('URl (router.url):' + this.get('router.url'));
    
    Ember.run.schedule('afterRender', this, function(){
        logs.pushObject(`(${property}) URl (afterRender): ${ this.get('router.url')}`);
   }); 
    
    return this._super.apply(this, arguments);
  };
}
