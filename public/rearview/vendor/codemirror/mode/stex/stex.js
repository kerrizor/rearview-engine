CodeMirror.defineMode("stex",function(){function t(t,e){t.cmdState.push(e)}function e(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function n(t){if(t.cmdState.length>0){var e=t.cmdState.pop();e.closeBracket()}}function r(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var r=e[n];if("DEFAULT"!=r.name)return r.styleIdentifier()}return null}function a(t,e,n,r){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=r,this.brackets=n,this.styleIdentifier=function(){return this.bracketNo<=this.styles.length?this.styles[this.bracketNo-1]:null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}function c(t,e){t.f=e}function i(n,a){if(n.match(/^\\[a-zA-Z@]+/)){var i=n.current();i=i.substr(1,i.length-1);var l;return l=u.hasOwnProperty(i)?u[i]:u.DEFAULT,l=new l,t(a,l),c(a,s),l.style}if(n.match(/^\\[$&%#{}_]/))return"tag";if(n.match(/^\\[,;!\/]/))return"tag";var f=n.next();return"%"==f?(n.eol()||c(a,o),"comment"):"}"==f||"]"==f?(l=e(a))?(l.closeBracket(f),c(a,s),"bracket"):"error":"{"==f||"["==f?(l=u.DEFAULT,l=new l,t(a,l),"bracket"):/\d/.test(f)?(n.eatWhile(/[\w.%]/),"atom"):(n.eatWhile(/[\w-_]/),r(a))}function o(t,e){return t.skipToEnd(),c(e,i),"comment"}function s(t,r){var a=t.peek();if("{"==a||"["==a){{var o=e(r);o.openBracket(a)}return t.eat(a),c(r,i),"bracket"}return/[ \t\r]/.test(a)?(t.eat(a),null):(c(r,i),o=e(r),o&&n(r),i(t,r))}var u=new Array;return u.importmodule=a("importmodule","tag","{[",["string","builtin"]),u.documentclass=a("documentclass","tag","{[",["","atom"]),u.usepackage=a("documentclass","tag","[",["atom"]),u.begin=a("documentclass","tag","[",["atom"]),u.end=a("documentclass","tag","[",["atom"]),u.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=function(){},this.openBracket=function(){},this.closeBracket=function(){}},{startState:function(){return{f:i,cmdState:[]}},copyState:function(t){return{f:t.f,cmdState:t.cmdState.slice(0,t.cmdState.length)}},token:function(t,e){{var n=e.f(t,e);t.current()}return n}}}),CodeMirror.defineMIME("text/x-stex","stex"),CodeMirror.defineMIME("text/x-latex","stex");