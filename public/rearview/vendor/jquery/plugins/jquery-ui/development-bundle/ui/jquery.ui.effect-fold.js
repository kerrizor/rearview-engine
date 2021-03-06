/*!
 * jQuery UI Effects Fold 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e){e.effects.effect.fold=function(t,i){var h,s,f=e(this),o=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(f,t.mode||"hide"),r="show"===d,c="hide"===d,n=t.size||15,a=/([0-9]+)%/.exec(n),g=!!t.horizFirst,w=r!==g,p=w?["width","height"]:["height","width"],m=t.duration/2,u={},v={};e.effects.save(f,o),f.show(),h=e.effects.createWrapper(f).css({overflow:"hidden"}),s=w?[h.width(),h.height()]:[h.height(),h.width()],a&&(n=parseInt(a[1],10)/100*s[c?0:1]),r&&h.css(g?{height:0,width:n}:{height:n,width:0}),u[p[0]]=r?s[0]:n,v[p[1]]=r?s[1]:0,h.animate(u,m,t.easing).animate(v,m,t.easing,function(){c&&f.hide(),e.effects.restore(f,o),e.effects.removeWrapper(f),i()})}}(jQuery);