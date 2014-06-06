CodeMirror.defineMode("rust",function(){function e(e,t){return J=e,t}function t(t,a){var o=t.next();if('"'==o)return a.tokenize=n,a.tokenize(t,a);if("'"==o)return J="atom",t.eat("\\")?t.skipTo("'")?(t.next(),"string"):"error":(t.next(),t.eat("'")?"string":"error");if("/"==o){if(t.eat("/"))return t.skipToEnd(),"comment";if(t.eat("*"))return a.tokenize=r(1),a.tokenize(t,a)}if("#"==o)return t.eat("[")?(J="open-attr",null):(t.eatWhile(/\w/),e("macro","meta"));if(":"==o&&t.match(":<"))return e("op",null);if(o.match(/\d/)||"."==o&&t.eat(/\d/)){var i=!1;return t.match(/^x[\da-f]+/i)||t.match(/^b[01]+/)||(t.eatWhile(/\d/),t.eat(".")&&(i=!0,t.eatWhile(/\d/)),t.match(/^e[+\-]?\d+/i)&&(i=!0)),t.match(i?/^f(?:32|64)/:/^[ui](?:8|16|32|64)/),e("atom","number")}return o.match(/[()\[\]{}:;,]/)?e(o,null):"-"==o&&t.eat(">")?e("->",null):o.match(V)?(t.eatWhile(V),e("op",null)):(t.eatWhile(/\w/),K=t.current(),t.match(/^::\w/)?(t.backUp(1),e("prefix","variable-2")):a.keywords.propertyIsEnumerable(K)?e(a.keywords[K],K.match(/true|false/)?"atom":"keyword"):e("name","variable"))}function n(n,r){for(var a,o=!1;a=n.next();){if('"'==a&&!o)return r.tokenize=t,e("atom","string");o=!o&&"\\"==a}return e("op","string")}function r(e){return function(n,a){for(var o,i=null;o=n.next();){if("/"==o&&"*"==i){if(1==e){a.tokenize=t;break}return a.tokenize=r(e-1),a.tokenize(n,a)}if("*"==o&&"/"==i)return a.tokenize=r(e+1),a.tokenize(n,a);i=o}return"comment"}}function a(){for(var e=arguments.length-1;e>=0;e--)X.cc.push(arguments[e])}function o(){return a.apply(null,arguments),!0}function i(e,t){var n=function(){var n=X.state;n.lexical={indented:n.indented,column:X.stream.column(),type:e,prev:n.lexical,info:t}};return n.lex=!0,n}function u(){var e=X.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function l(){X.state.keywords=R}function c(){X.state.keywords=Q}function f(e,t){function n(r){return","==r?o(e,n):r==t?o():o(n)}return function(r){return r==t?o():a(e,n)}}function m(e,t){return o(i("stat",t),e,u,d)}function d(e){return"}"==e?o():"let"==e?m(g,"let"):"fn"==e?m(M):"type"==e?o(i("stat"),W,s,u,d):"enum"==e?m($):"mod"==e?m(C):"iface"==e?m(E):"impl"==e?m(I):"open-attr"==e?o(i("]"),f(k,"]"),u):"ignore"==e||e.match(/[\]\);,]/)?o(d):a(i("stat"),k,u,s,d)}function s(e){return";"==e?o():a()}function k(e){return"atom"==e||"name"==e?o(p):"{"==e?o(i("}"),y,u):e.match(/[\[\(]/)?G(e,k):e.match(/[\]\)\};,]/)?a():"if-style"==e?o(k,k):"else-style"==e||"op"==e?o(k):"for"==e?o(U,b,z,k,k):"alt"==e?o(k,q):"fn"==e?o(M):"macro"==e?o(F):o()}function p(e){return"."==K?o(h):"::<"==K?o(O,p):"op"==e||":"==K?o(k):"("==e||"["==e?G(e,k):a()}function h(){return K.match(/^\w+$/)?(X.marked="variable",o(p)):a(k)}function y(e){if("op"==e){if("|"==K)return o(w,u,i("}","block"),d);if("||"==K)return o(u,i("}","block"),d)}return a("mutable"==K||K.match(/^\w+$/)&&":"==X.stream.peek()&&!X.stream.match("::",!1)?x(k):d)}function x(e){function t(n){return"mutable"==K||"with"==K?(X.marked="keyword",o(t)):K.match(/^\w*$/)?(X.marked="variable",o(t)):":"==n?o(e,t):"}"==n?o():o(t)}return t}function w(e){return"name"==e?(X.marked="def",o(w)):"op"==e&&"|"==K?o():o(w)}function g(e){return e.match(/[\]\)\};]/)?o():"="==K?o(k,v):","==e?o(g):a(U,b,g)}function v(e){return e.match(/[\]\)\};,]/)?a(g):a(k,v)}function b(e){return":"==e?o(l,S,c):a()}function z(e){return"name"==e&&"in"==K?(X.marked="keyword",o()):a()}function M(e){return"@"==K||"~"==K?(X.marked="keyword",o(M)):"name"==e?(X.marked="def",o(M)):"<"==K?o(O,M):"{"==e?a(k):"("==e?o(i(")"),f(P,")"),u,M):"->"==e?o(l,S,c,M):";"==e?o():o(M)}function W(e){return"name"==e?(X.marked="def",o(W)):"<"==K?o(O,W):"="==K?o(l,S,c):o(W)}function $(e){return"name"==e?(X.marked="def",o($)):"<"==K?o(O,$):"="==K?o(l,S,c,s):"{"==e?o(i("}"),l,j,c,u):o($)}function j(e){return"}"==e?o():"("==e?o(i(")"),f(S,")"),u,j):(K.match(/^\w+$/)&&(X.marked="def"),o(j))}function C(e){return"name"==e?(X.marked="def",o(C)):"{"==e?o(i("}"),d,u):a()}function E(e){return"name"==e?(X.marked="def",o(E)):"<"==K?o(O,E):"{"==e?o(i("}"),d,u):a()}function I(e){return"<"==K?o(O,I):"of"==K||"for"==K?(X.marked="keyword",o(S,I)):"name"==e?(X.marked="def",o(I)):"{"==e?o(i("}"),d,u):a()}function O(){return">"==K?o():","==K?o(O):":"==K?o(S,O):a(S,O)}function P(e){return"name"==e?(X.marked="def",o(P)):":"==e?o(l,S,c):a()}function S(e){return"name"==e?(X.marked="variable-3",o(T)):"mutable"==K?(X.marked="keyword",o(S)):"atom"==e?o(T):"op"==e||"obj"==e?o(S):"fn"==e?o(A):"{"==e?o(i("{"),x(S),u):G(e,S)}function T(){return"<"==K?o(O):a()}function A(e){return"("==e?o(i("("),f(S,")"),u,A):"->"==e?o(S):a()}function U(e){return"name"==e?(X.marked="def",o(_)):"atom"==e?o(_):"op"==e?o(U):e.match(/[\]\)\};,]/)?a():G(e,U)}function _(e){return"op"==e&&"."==K?o():"to"==K?(X.marked="keyword",o(U)):a()}function q(e){return"{"==e?o(i("}","alt"),B,u):a()}function B(e){return"}"==e?o():"|"==e?o(B):"when"==K?(X.marked="keyword",o(k,D)):e.match(/[\]\);,]/)?o(B):a(U,D)}function D(e){return"{"==e?o(i("}","alt"),d,u,B):a(B)}function F(e){return e.match(/[\[\(\{]/)?G(e,k):a()}function G(e,t){return"["==e?o(i("]"),f(t,"]"),u):"("==e?o(i(")"),f(t,")"),u):"{"==e?o(i("}"),f(t,"}"),u):o()}function H(e,t,n){var r=e.cc;for(X.state=e,X.stream=t,X.marked=null,X.cc=r;;){var a=r.length?r.pop():d;if(a(J)){for(;r.length&&r[r.length-1].lex;)r.pop()();return X.marked||n}}}var J,K,L=4,N=2,Q={"if":"if-style","while":"if-style","else":"else-style","do":"else-style",ret:"else-style",fail:"else-style","break":"atom",cont:"atom","const":"let",resource:"fn",let:"let",fn:"fn","for":"for",alt:"alt",iface:"iface",impl:"impl",type:"type","enum":"enum",mod:"mod",as:"op","true":"atom","false":"atom",assert:"op",check:"op",claim:"op","native":"ignore",unsafe:"ignore","import":"else-style","export":"else-style",copy:"op",log:"op",log_err:"op",use:"op",bind:"op",self:"atom"},R=function(){for(var e={fn:"fn",block:"fn",obj:"obj"},t="bool uint int i8 i16 i32 i64 u8 u16 u32 u64 float f32 f64 str char".split(" "),n=0,r=t.length;r>n;++n)e[t[n]]="atom";return e}(),V=/[+\-*&%=<>!?|\.@]/,X={state:null,stream:null,marked:null,cc:null};return u.lex=l.lex=c.lex=!0,{startState:function(){return{tokenize:t,cc:[],lexical:{indented:-L,column:0,type:"top",align:!1},keywords:Q,indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;J=K=null;var n=t.tokenize(e,t);return"comment"==n?n:(t.lexical.hasOwnProperty("align")||(t.lexical.align=!0),"prefix"==J?n:(K||(K=e.current()),H(t,e,n)))},indent:function(e,n){if(e.tokenize!=t)return 0;var r=n&&n.charAt(0),a=e.lexical,o=a.type,i=r==o;return"stat"==o?a.indented+L:a.align?a.column+(i?0:1):a.indented+(i?0:"alt"==a.info?N:L)},electricChars:"{}"}}),CodeMirror.defineMIME("text/x-rustsrc","rust");