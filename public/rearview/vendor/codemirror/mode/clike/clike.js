CodeMirror.defineMode("clike",function(e,t){function r(e,t){var r=e.next();if(h[r]){var i=h[r](e,t);if(i!==!1)return i}if('"'==r||"'"==r)return t.tokenize=n(r),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(r))return s=r,null;if(/\d/.test(r))return e.eatWhile(/[\w\.]/),"number";if("/"==r){if(e.eat("*"))return t.tokenize=a,a(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(y.test(r))return e.eatWhile(y),"operator";e.eatWhile(/[\w\$_]/);var o=e.current();return u.propertyIsEnumerable(o)?(f.propertyIsEnumerable(o)&&(s="newstatement"),"keyword"):d.propertyIsEnumerable(o)?(f.propertyIsEnumerable(o)&&(s="newstatement"),"builtin"):p.propertyIsEnumerable(o)?"atom":"variable"}function n(e){return function(t,r){for(var n,a=!1,i=!1;null!=(n=t.next());){if(n==e&&!a){i=!0;break}a=!a&&"\\"==n}return(i||!a&&!m)&&(r.tokenize=null),"string"}}function a(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}function i(e,t,r,n,a){this.indented=e,this.column=t,this.type=r,this.align=n,this.prev=a}function o(e,t,r){return e.context=new i(e.indented,t,r,null,e.context)}function l(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}var s,c=e.indentUnit,u=t.keywords||{},d=t.builtin||{},f=t.blockKeywords||{},p=t.atoms||{},h=t.hooks||{},m=t.multiLineStrings,y=/[+\-*&%=<>!?|\/]/;return{startState:function(e){return{tokenize:null,context:new i((e||0)-c,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;s=null;var a=(t.tokenize||r)(e,t);if("comment"==a||"meta"==a)return a;if(null==n.align&&(n.align=!0),";"!=s&&":"!=s||"statement"!=n.type)if("{"==s)o(t,e.column(),"}");else if("["==s)o(t,e.column(),"]");else if("("==s)o(t,e.column(),")");else if("}"==s){for(;"statement"==n.type;)n=l(t);for("}"==n.type&&(n=l(t));"statement"==n.type;)n=l(t)}else s==n.type?l(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==s)&&o(t,e.column(),"statement");else l(t);return t.startOfLine=!1,a},indent:function(e,t){if(e.tokenize!=r&&null!=e.tokenize)return 0;var n=e.context,a=t&&t.charAt(0);"statement"==n.type&&"}"==a&&(n=n.prev);var i=a==n.type;return"statement"==n.type?n.indented+("{"==a?0:c):n.align?n.column+(i?0:1):n.indented+(i?0:c)},electricChars:"{}"}}),function(){function e(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}function t(e,t){return t.startOfLine?(e.skipToEnd(),"meta"):!1}function r(e,t){for(var r;null!=(r=e.next());)if('"'==r&&!e.eat('"')){t.tokenize=null;break}return"string"}function n(e,t){for(var r=0;r<e.length;++r)CodeMirror.defineMIME(e[r],t)}var a="auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";n(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:e(a),blockKeywords:e("case do else for if switch while struct"),atoms:e("null"),hooks:{"#":t}}),n(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:e(a+" asm dynamic_cast namespace reinterpret_cast try bool explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected wchar_t"),blockKeywords:e("catch class do else finally for if struct switch try while"),atoms:e("true false null"),hooks:{"#":t}}),CodeMirror.defineMIME("text/x-java",{name:"clike",keywords:e("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),blockKeywords:e("catch class do else finally for if switch try while"),atoms:e("true false null"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"}}}),CodeMirror.defineMIME("text/x-csharp",{name:"clike",keywords:e("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),blockKeywords:e("catch class do else finally for foreach if struct switch try while"),builtin:e("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),atoms:e("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=r,r(e,t)):(e.eatWhile(/[\w\$_]/),"meta")}}}),CodeMirror.defineMIME("text/x-scala",{name:"clike",keywords:e("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),blockKeywords:e("catch class do else finally for forSome if match switch try while"),atoms:e("true false null"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"}}})}();