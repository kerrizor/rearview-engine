/*!
 * jQuery UI Effects Transfer 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(t){t.effects.effect.transfer=function(e,i){var o=t(this),n=t(e.to),s="fixed"===n.css("position"),f=t("body"),d=s?f.scrollTop():0,a=s?f.scrollLeft():0,r=n.offset(),c={top:r.top-d,left:r.left-a,height:n.innerHeight(),width:n.innerWidth()},l=o.offset(),h=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:l.top-d,left:l.left-a,height:o.innerHeight(),width:o.innerWidth(),position:s?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){h.remove(),i()})}}(jQuery);