"use strict"
define("ember-issue-10906/app",["exports","ember","ember-issue-10906/resolver","ember-load-initializers","ember-issue-10906/config/environment"],function(e,t,i,r,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:i.default});(0,r.default)(a,n.default.modulePrefix),e.default=a}),define("ember-issue-10906/components/all-my-logger",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Component.extend({logger:t.default.inject.service(),logs:t.default.computed.alias("logger.logs"),action:{clearLogs:function(){this.get("logs").clear()}}})}),define("ember-issue-10906/controllers/application",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Controller.extend({appName:"Issue 10906"})}),define("ember-issue-10906/helpers/app-version",["exports","ember","ember-issue-10906/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i,r){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?a.match(r.versionRegExp)[0]:t.hideVersion?a.match(r.shaRegExp)[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n
var a=i.default.APP.version
e.default=t.default.Helper.helper(n)}),define("ember-issue-10906/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-issue-10906/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-issue-10906/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-issue-10906/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=i.default.APP,n=r.name,a=r.version
e.default={name:"App Version",initialize:(0,t.default)(n,a)}}),define("ember-issue-10906/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-issue-10906/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-issue-10906/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-issue-10906/initializers/export-application-global",["exports","ember","ember-issue-10906/config/environment"],function(e,t,i){function r(){var e=arguments[1]||arguments[0]
if(!1!==i.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,a=i.default.exportApplicationGlobal
n="string"==typeof a?a:t.default.String.classify(i.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("ember-issue-10906/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-issue-10906/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-issue-10906/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-issue-10906/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-issue-10906/mixins/logging",["exports","ember"],function(e,t){function i(e){return function(){var i=this.get("logger.logs")
return i.pushObject(this._debugContainerKey+" "+e),i.pushObject("URl (window.location.href):"+window.location.href),i.pushObject("URl (router.url):"+this.get("router.url")),t.default.run.schedule("afterRender",this,function(){i.pushObject("("+e+") URl (afterRender): "+this.get("router.url"))}),this._super.apply(this,arguments)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Mixin.create({logger:t.default.inject.service(),enter:i("enter (private)"),exit:i("exit (private)"),activate:i("activate"),deactivate:i("deactivate"),serialize:i("serialize"),deserialize:i("deserialize (private)"),model:i("model"),setupController:i("setupController"),afterModel:i("afterModel"),beforeModel:i("beforeModel"),renderTemplate:i("renderTemplate"),redirect:i("redirect"),actions:{didTransition:i("didTransition")}})}),define("ember-issue-10906/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-issue-10906/router",["exports","ember","ember-issue-10906/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=t.default.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL})
r.map(function(){this.route("posts",function(){})}),e.default=r}),define("ember-issue-10906/routes/posts",["exports","ember","ember-issue-10906/mixins/logging"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend(i.default,{})}),define("ember-issue-10906/routes/posts/index",["exports","ember","ember-issue-10906/mixins/logging"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend(i.default,{})}),define("ember-issue-10906/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-issue-10906/services/logger",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Service.extend({init:function(){this._super.apply(this,arguments),this.set("logs",t.default.A([]))}})}),define("ember-issue-10906/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"rxmWsgHs",block:'{"statements":[[11,"h1",[]],[13],[0,"Welcome to "],[1,[26,["appName"]],false],[14],[0,"\\n"],[11,"br",[]],[13],[14],[0,"\\n"],[6,["link-to"],["index"],null,{"statements":[[0,"Index"]],"locals":[]},null],[0,"\\n"],[6,["link-to"],["posts"],null,{"statements":[[0,"Posts"]],"locals":[]},null],[0,"\\n    \\n"],[1,[26,["outlet"]],false],[0,"\\n    \\n"],[1,[26,["all-my-logger"]],false],[0,"\\n"],[11,"br",[]],[13],[14],[0,"\\n"],[11,"br",[]],[13],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-issue-10906/templates/application.hbs"}})}),define("ember-issue-10906/templates/components/all-my-logger",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PIlD6TvU",block:'{"statements":[[11,"h3",[]],[13],[0,"Logged Method Calls"],[14],[0,"\\n\\n"],[11,"button",[]],[5,["action"],[[28,[null]],"clearLogs"]],[13],[0,"Clear Logs"],[14],[0,"\\n"],[11,"ul",[]],[13],[0,"\\n"],[6,["each"],[[28,["logs"]]],null,{"statements":[[0,"    "],[11,"li",[]],[13],[1,[28,["log"]],false],[14],[0,"\\n"]],"locals":["log"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-issue-10906/templates/components/all-my-logger.hbs"}})}),define("ember-issue-10906/templates/posts",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"B1Sst+gq",block:'{"statements":[[1,[26,["outlet"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-issue-10906/templates/posts.hbs"}})}),define("ember-issue-10906/templates/posts/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"wNZRe26V",block:'{"statements":[[1,[26,["outlet"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-issue-10906/templates/posts/index.hbs"}})}),define("ember-issue-10906/config/environment",["ember"],function(e){try{var t="ember-issue-10906/config/environment",i=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),r=JSON.parse(unescape(i)),n={default:r}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-issue-10906/app").default.create({name:"ember-issue-10906",version:"0.0.0+0e269a0b"})
