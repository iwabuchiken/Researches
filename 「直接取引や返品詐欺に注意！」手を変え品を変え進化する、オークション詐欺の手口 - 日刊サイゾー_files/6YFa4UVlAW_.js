/*1364513332,180686899*/

if (self.CavalryLogger) { CavalryLogger.start_js(["yEJPE"]); }

__d("AsyncSignal",["Env","ErrorUtils","QueryString","URI","XHR","copyProperties"],function(a,b,c,d,e,f){var g=b('Env'),h=b('ErrorUtils'),i=b('QueryString'),j=b('URI'),k=b('XHR'),l=b('copyProperties');function m(n,o){this.data=o||{};if(g.tracking_domain&&n.charAt(0)=='/')n=g.tracking_domain+n;this.uri=n;}m.prototype.setHandler=function(n){this.handler=n;return this;};m.prototype.send=function(){var n=this.handler,o=this.data,p=new Image();if(n)p.onload=p.onerror=function(){h.applyWithGuard(n,null,[p.height==1]);};o.asyncSignal=(Math.random()*10000|0)+1;var q=new j(this.uri).isFacebookURI();l(o,k.getAsyncParams(q?'POST':'GET'));p.src=i.appendToUrl(this.uri,o);return this;};e.exports=m;});
__d("CookieCore",[],function(a,b,c,d,e,f){var g={set:function(h,i,j,k,l){document.cookie=h+"="+encodeURIComponent(i)+"; "+(j?"expires="+(new Date(Date.now()+j)).toGMTString()+"; ":"")+"path="+(k||'/')+"; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1')+(l?"; secure":"");},clear:function(h,i){i=i||'/';document.cookie=h+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; "+"path="+i+"; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');},get:function(h){var i=document.cookie.match('(?:^|;\\s*)'+h+'=(.*?)(?:;|$)');return (i?decodeURIComponent(i[1]):i);}};e.exports=g;});
__d("Cookie",["CookieCore","Env","copyProperties"],function(a,b,c,d,e,f){var g=b('CookieCore'),h=b('Env'),i=b('copyProperties');function j(l,m,n,o,p){if(h.no_cookies&&l!='tpa')return;g.set(l,m,n,o,p);}var k=i({},g);k.set=j;e.exports=k;});
__d("detect_broken_proxy_cache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f){var g=b('AsyncSignal'),h=b('Cookie'),i=b('URI');function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports=j;});
__d("legacy:detect-broken-proxy-cache",["detect_broken_proxy_cache"],function(a,b,c,d){a.detect_broken_proxy_cache=b('detect_broken_proxy_cache');},3);
__d("link_rel_preload",["Bootloader","Parent"],function(a,b,c,d,e,f){var g=b('Bootloader'),h=b('Parent');function i(){var j=/async(?:-post)?|dialog(?:-pipe|-post)?|theater|toggle/;document.documentElement.onmousedown=function(k){k=k||window.event;var l=k.target||k.srcElement,m=h.byTag(l,'A');if(!m)return;var n=m.getAttribute('ajaxify'),o=m.href,p=n||o;if(n&&o&&!(/#$/).test(o)){var q=k.which&&k.which!=1,r=k.altKey||k.ctrlKey||k.metaKey||k.shiftKey;if(q||r)return;}var s=m.rel&&m.rel.match(j);s=s&&s[0];switch(s){case 'dialog':case 'dialog-post':g.loadModules(['Dialog']);break;case 'dialog-pipe':g.loadModules(['AjaxPipeRequest','Dialog']);break;case 'async':case 'async-post':g.loadModules(['AsyncRequest']);break;case 'theater':g.loadModules(['PhotoSnowlift'],function(t){t.preload(p,m);});break;case 'toggle':g.loadModules(['Toggler']);break;}return;};}e.exports=i;});
__d("legacy:link-rel-preload",["link_rel_preload"],function(a,b,c,d){a.link_rel_preload=b('link_rel_preload');},3);
__d("DimensionTracking",["Event","AsyncSignal","Cookie","DOMDimensions","isInIframe"],function(a,b,c,d,e,f){var g=b('Event'),h=b('AsyncSignal'),i=b('Cookie'),j=b('DOMDimensions'),k=b('isInIframe');function l(){var m=j.getViewportDimensions();i.set('wd',m.width+'x'+m.height);if(Math.random()<.01)new h('/ajax/dimension_context.php',{x:m.width,y:m.height}).send();}if(!k()){setTimeout(l,100);g.listen(window,'resize',l);g.listen(window,'focus',l);}});
__d("HighContrastMode",["AsyncSignal","Cookie","CSS","DOM","Env","Style"],function(a,b,c,d,e,f){var g=b('AsyncSignal'),h=b('Cookie'),i=b('CSS'),j=b('DOM'),k=b('Env'),l=b('Style'),m=null,n={init:function(o){if(m!==null&&o.currentState!=m)return;var p=j.create('div');j.appendContent(document.body,p);p.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+o.spacerImage+');';var q=l.get(p,'background-image'),r=l.get(p,'border-top-color'),s=l.get(p,'border-right-color'),t=r==s||(q&&(q=='none'||q=='url(invalid-url:)'));if(t!=o.currentState){i.conditionClass(document.documentElement,'highContrast',t);if(k.user){h.set('highContrastMode',t?1:0);if(t)new g('/ajax/highcontrast').send();}}j.remove(p);m=t;}};e.exports=n;});