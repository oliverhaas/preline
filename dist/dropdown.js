!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(()=>(()=>{"use strict";var e={170:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>E,afterRead:()=>w,afterWrite:()=>C,applyStyles:()=>_,arrow:()=>J,auto:()=>a,basePlacements:()=>l,beforeMain:()=>b,beforeRead:()=>y,beforeWrite:()=>O,bottom:()=>r,clippingParents:()=>f,computeStyles:()=>ne,createPopper:()=>_e,createPopperBase:()=>De,createPopperLite:()=>Me,detectOverflow:()=>ge,end:()=>u,eventListeners:()=>re,flip:()=>we,hide:()=>Ee,left:()=>s,main:()=>x,modifierPhases:()=>L,offset:()=>Oe,placements:()=>v,popper:()=>p,popperGenerator:()=>Te,popperOffsets:()=>Se,preventOverflow:()=>Ce,read:()=>g,reference:()=>h,right:()=>i,start:()=>c,top:()=>o,variationPlacements:()=>m,viewport:()=>d,write:()=>S});var o="top",r="bottom",i="right",s="left",a="auto",l=[o,r,i,s],c="start",u="end",f="clippingParents",d="viewport",p="popper",h="reference",m=l.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),v=[].concat(l,[a]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),y="beforeRead",g="read",w="afterRead",b="beforeMain",x="main",E="afterMain",O="beforeWrite",S="write",C="afterWrite",L=[y,g,w,b,x,E,O,S,C];function P(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function I(e){return e instanceof A(e).Element||e instanceof Element}function T(e){return e instanceof A(e).HTMLElement||e instanceof HTMLElement}function D(e){return"undefined"!=typeof ShadowRoot&&(e instanceof A(e).ShadowRoot||e instanceof ShadowRoot)}const _={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];T(r)&&P(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});T(o)&&P(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function M(e){return e.split("-")[0]}var j=Math.max,H=Math.min,B=Math.round;function k(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function q(){return!/^((?!chrome|android).)*safari/i.test(k())}function R(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&T(e)&&(r=e.offsetWidth>0&&B(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&B(o.height)/e.offsetHeight||1);var s=(I(e)?A(e):window).visualViewport,a=!q()&&n,l=(o.left+(a&&s?s.offsetLeft:0))/r,c=(o.top+(a&&s?s.offsetTop:0))/i,u=o.width/r,f=o.height/i;return{width:u,height:f,top:c,right:l+u,bottom:c+f,left:l,x:l,y:c}}function W(e){var t=R(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Y(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&D(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function V(e){return A(e).getComputedStyle(e)}function $(e){return["table","td","th"].indexOf(P(e))>=0}function N(e){return((I(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||N(e)}function F(e){return T(e)&&"fixed"!==V(e).position?e.offsetParent:null}function U(e){for(var t=A(e),n=F(e);n&&$(n)&&"static"===V(n).position;)n=F(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===V(n).position)?t:n||function(e){var t=/firefox/i.test(k());if(/Trident/i.test(k())&&T(e)&&"fixed"===V(e).position)return null;var n=K(e);for(D(n)&&(n=n.host);T(n)&&["html","body"].indexOf(P(n))<0;){var o=V(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,n){return j(e,H(t,n))}function X(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const J={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,a=e.name,c=e.options,u=n.elements.arrow,f=n.modifiersData.popperOffsets,d=M(n.placement),p=z(d),h=[s,i].indexOf(d)>=0?"height":"width";if(u&&f){var m=function(e,t){return X("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,l))}(c.padding,n),v=W(u),y="y"===p?o:s,g="y"===p?r:i,w=n.rects.reference[h]+n.rects.reference[p]-f[p]-n.rects.popper[h],b=f[p]-n.rects.reference[p],x=U(u),E=x?"y"===p?x.clientHeight||0:x.clientWidth||0:0,O=w/2-b/2,S=m[y],C=E-v[h]-m[g],L=E/2-v[h]/2+O,P=Z(S,L,C),A=p;n.modifiersData[a]=((t={})[A]=P,t.centerOffset=P-L,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&Y(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Q(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var t,n=e.popper,a=e.popperRect,l=e.placement,c=e.variation,f=e.offsets,d=e.position,p=e.gpuAcceleration,h=e.adaptive,m=e.roundOffsets,v=e.isFixed,y=f.x,g=void 0===y?0:y,w=f.y,b=void 0===w?0:w,x="function"==typeof m?m({x:g,y:b}):{x:g,y:b};g=x.x,b=x.y;var E=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),S=s,C=o,L=window;if(h){var P=U(n),I="clientHeight",T="clientWidth";if(P===A(n)&&"static"!==V(P=N(n)).position&&"absolute"===d&&(I="scrollHeight",T="scrollWidth"),l===o||(l===s||l===i)&&c===u)C=r,b-=(v&&P===L&&L.visualViewport?L.visualViewport.height:P[I])-a.height,b*=p?1:-1;if(l===s||(l===o||l===r)&&c===u)S=i,g-=(v&&P===L&&L.visualViewport?L.visualViewport.width:P[T])-a.width,g*=p?1:-1}var D,_=Object.assign({position:d},h&&ee),M=!0===m?function(e,t){var n=e.x,o=e.y,r=t.devicePixelRatio||1;return{x:B(n*r)/r||0,y:B(o*r)/r||0}}({x:g,y:b},A(n)):{x:g,y:b};return g=M.x,b=M.y,p?Object.assign({},_,((D={})[C]=O?"0":"",D[S]=E?"0":"",D.transform=(L.devicePixelRatio||1)<=1?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",D)):Object.assign({},_,((t={})[C]=O?b+"px":"",t[S]=E?g+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,l=void 0===a||a,c={placement:M(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var oe={passive:!0};const re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,s=o.resize,a=void 0===s||s,l=A(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,oe)})),a&&l.addEventListener("resize",n.update,oe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,oe)})),a&&l.removeEventListener("resize",n.update,oe)}},data:{}};var ie={left:"right",right:"left",bottom:"top",top:"bottom"};function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var ae={start:"end",end:"start"};function le(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function ce(e){var t=A(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ue(e){return R(N(e)).left+ce(e).scrollLeft}function fe(e){var t=V(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function de(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:T(e)&&fe(e)?e:de(K(e))}function pe(e,t){var n;void 0===t&&(t=[]);var o=de(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=A(o),s=r?[i].concat(i.visualViewport||[],fe(o)?o:[]):o,a=t.concat(s);return r?a:a.concat(pe(K(s)))}function he(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,n){return t===d?he(function(e,t){var n=A(e),o=N(e),r=n.visualViewport,i=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){i=r.width,s=r.height;var c=q();(c||!c&&"fixed"===t)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:a+ue(e),y:l}}(e,n)):I(t)?function(e,t){var n=R(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):he(function(e){var t,n=N(e),o=ce(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=j(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=j(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-o.scrollLeft+ue(e),l=-o.scrollTop;return"rtl"===V(r||n).direction&&(a+=j(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}(N(e)))}function ve(e,t,n,o){var r="clippingParents"===t?function(e){var t=pe(K(e)),n=["absolute","fixed"].indexOf(V(e).position)>=0&&T(e)?U(e):e;return I(n)?t.filter((function(e){return I(e)&&Y(e,n)&&"body"!==P(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),s=i[0],a=i.reduce((function(t,n){var r=me(e,n,o);return t.top=j(r.top,t.top),t.right=H(r.right,t.right),t.bottom=H(r.bottom,t.bottom),t.left=j(r.left,t.left),t}),me(e,s,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ye(e){var t,n=e.reference,a=e.element,l=e.placement,f=l?M(l):null,d=l?Q(l):null,p=n.x+n.width/2-a.width/2,h=n.y+n.height/2-a.height/2;switch(f){case o:t={x:p,y:n.y-a.height};break;case r:t={x:p,y:n.y+n.height};break;case i:t={x:n.x+n.width,y:h};break;case s:t={x:n.x-a.width,y:h};break;default:t={x:n.x,y:n.y}}var m=f?z(f):null;if(null!=m){var v="y"===m?"height":"width";switch(d){case c:t[m]=t[m]-(n[v]/2-a[v]/2);break;case u:t[m]=t[m]+(n[v]/2-a[v]/2)}}return t}function ge(e,t){void 0===t&&(t={});var n=t,s=n.placement,a=void 0===s?e.placement:s,c=n.strategy,u=void 0===c?e.strategy:c,m=n.boundary,v=void 0===m?f:m,y=n.rootBoundary,g=void 0===y?d:y,w=n.elementContext,b=void 0===w?p:w,x=n.altBoundary,E=void 0!==x&&x,O=n.padding,S=void 0===O?0:O,C=X("number"!=typeof S?S:G(S,l)),L=b===p?h:p,P=e.rects.popper,A=e.elements[E?L:b],T=ve(I(A)?A:A.contextElement||N(e.elements.popper),v,g,u),D=R(e.elements.reference),_=ye({reference:D,element:P,strategy:"absolute",placement:a}),M=he(Object.assign({},P,_)),j=b===p?M:D,H={top:T.top-j.top+C.top,bottom:j.bottom-T.bottom+C.bottom,left:T.left-j.left+C.left,right:j.right-T.right+C.right},B=e.modifiersData.offset;if(b===p&&B){var k=B[a];Object.keys(H).forEach((function(e){var t=[i,r].indexOf(e)>=0?1:-1,n=[o,r].indexOf(e)>=0?"y":"x";H[e]+=k[n]*t}))}return H}const we={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,u=e.name;if(!t.modifiersData[u]._skip){for(var f=n.mainAxis,d=void 0===f||f,p=n.altAxis,h=void 0===p||p,y=n.fallbackPlacements,g=n.padding,w=n.boundary,b=n.rootBoundary,x=n.altBoundary,E=n.flipVariations,O=void 0===E||E,S=n.allowedAutoPlacements,C=t.options.placement,L=M(C),P=y||(L===C||!O?[se(C)]:function(e){if(M(e)===a)return[];var t=se(e);return[le(e),t,le(t)]}(C)),A=[C].concat(P).reduce((function(e,n){return e.concat(M(n)===a?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?v:c,f=Q(o),d=f?a?m:m.filter((function(e){return Q(e)===f})):l,p=d.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=d);var h=p.reduce((function(t,n){return t[n]=ge(e,{placement:n,boundary:r,rootBoundary:i,padding:s})[M(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:w,rootBoundary:b,padding:g,flipVariations:O,allowedAutoPlacements:S}):n)}),[]),I=t.rects.reference,T=t.rects.popper,D=new Map,_=!0,j=A[0],H=0;H<A.length;H++){var B=A[H],k=M(B),q=Q(B)===c,R=[o,r].indexOf(k)>=0,W=R?"width":"height",Y=ge(t,{placement:B,boundary:w,rootBoundary:b,altBoundary:x,padding:g}),V=R?q?i:s:q?r:o;I[W]>T[W]&&(V=se(V));var $=se(V),N=[];if(d&&N.push(Y[k]<=0),h&&N.push(Y[V]<=0,Y[$]<=0),N.every((function(e){return e}))){j=B,_=!1;break}D.set(B,N)}if(_)for(var K=function(e){var t=A.find((function(t){var n=D.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},F=O?3:1;F>0;F--){if("break"===K(F))break}t.placement!==j&&(t.modifiersData[u]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[o,i,r,s].some((function(t){return e[t]>=0}))}const Ee={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,s=ge(t,{elementContext:"reference"}),a=ge(t,{altBoundary:!0}),l=be(s,o),c=be(a,r,i),u=xe(l),f=xe(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};const Oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.offset,l=void 0===a?[0,0]:a,c=v.reduce((function(e,n){return e[n]=function(e,t,n){var r=M(e),a=[s,o].indexOf(r)>=0?-1:1,l="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=l[0],u=l[1];return c=c||0,u=(u||0)*a,[s,i].indexOf(r)>=0?{x:u,y:c}:{x:c,y:u}}(n,t.rects,l),e}),{}),u=c[t.placement],f=u.x,d=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=c}};const Se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ye({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};const Ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,a=e.name,l=n.mainAxis,u=void 0===l||l,f=n.altAxis,d=void 0!==f&&f,p=n.boundary,h=n.rootBoundary,m=n.altBoundary,v=n.padding,y=n.tether,g=void 0===y||y,w=n.tetherOffset,b=void 0===w?0:w,x=ge(t,{boundary:p,rootBoundary:h,padding:v,altBoundary:m}),E=M(t.placement),O=Q(t.placement),S=!O,C=z(E),L="x"===C?"y":"x",P=t.modifiersData.popperOffsets,A=t.rects.reference,I=t.rects.popper,T="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,D="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),_=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(P){if(u){var k,q="y"===C?o:s,R="y"===C?r:i,Y="y"===C?"height":"width",V=P[C],$=V+x[q],N=V-x[R],K=g?-I[Y]/2:0,F=O===c?A[Y]:I[Y],X=O===c?-I[Y]:-A[Y],G=t.elements.arrow,J=g&&G?W(G):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[q],ne=ee[R],oe=Z(0,A[Y],J[Y]),re=S?A[Y]/2-K-oe-te-D.mainAxis:F-oe-te-D.mainAxis,ie=S?-A[Y]/2+K+oe+ne+D.mainAxis:X+oe+ne+D.mainAxis,se=t.elements.arrow&&U(t.elements.arrow),ae=se?"y"===C?se.clientTop||0:se.clientLeft||0:0,le=null!=(k=null==_?void 0:_[C])?k:0,ce=V+ie-le,ue=Z(g?H($,V+re-le-ae):$,V,g?j(N,ce):N);P[C]=ue,B[C]=ue-V}if(d){var fe,de="x"===C?o:s,pe="x"===C?r:i,he=P[L],me="y"===L?"height":"width",ve=he+x[de],ye=he-x[pe],we=-1!==[o,s].indexOf(E),be=null!=(fe=null==_?void 0:_[L])?fe:0,xe=we?ve:he-A[me]-I[me]-be+D.altAxis,Ee=we?he+A[me]+I[me]-be-D.altAxis:ye,Oe=g&&we?function(e,t,n){var o=Z(e,t,n);return o>n?n:o}(xe,he,Ee):Z(g?xe:ve,he,g?Ee:ye);P[L]=Oe,B[L]=Oe-he}t.modifiersData[a]=B}},requiresIfExists:["offset"]};function Le(e,t,n){void 0===n&&(n=!1);var o,r,i=T(t),s=T(t)&&function(e){var t=e.getBoundingClientRect(),n=B(t.width)/e.offsetWidth||1,o=B(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=N(t),l=R(e,s,n),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==P(t)||fe(a))&&(c=(o=t)!==A(o)&&T(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:ce(o)),T(t)?((u=R(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ue(a))),{x:l.left+c.scrollLeft-u.x,y:l.top+c.scrollTop-u.y,width:l.width,height:l.height}}function Pe(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var Ae={placement:"bottom",modifiers:[],strategy:"absolute"};function Ie(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Te(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?Ae:r;return function(e,t,n){void 0===n&&(n=i);var r,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ae,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function(n){var r="function"==typeof n?n(a.options):n;f(),a.options=Object.assign({},i,a.options,r),a.scrollParents={reference:I(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)};var s,c,d=function(e){var t=Pe(e);return L.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,a.options.modifiers),c=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return a.orderedModifiers=d.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:a,name:t,instance:u,options:o}),s=function(){};l.push(i||s)}})),u.update()},forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,n=e.popper;if(Ie(t,n)){a.rects={reference:Le(t,U(n),"fixed"===a.options.strategy),popper:W(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var r=a.orderedModifiers[o],i=r.fn,s=r.options,l=void 0===s?{}:s,f=r.name;"function"==typeof i&&(a=i({state:a,options:l,name:f,instance:u})||a)}else a.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(r())}))}))),s}),destroy:function(){f(),c=!0}};if(!Ie(e,t))return u;function f(){l.forEach((function(e){return e()})),l=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var De=Te(),_e=Te({defaultModifiers:[re,Se,ne,_,Oe,we,Ce,J,Ee]}),Me=Te({defaultModifiers:[re,Se,ne,_]})},291:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BREAKPOINTS=t.COMBO_BOX_ACCESSIBILITY_KEY_SET=t.SELECT_ACCESSIBILITY_KEY_SET=t.TABS_ACCESSIBILITY_KEY_SET=t.OVERLAY_ACCESSIBILITY_KEY_SET=t.DROPDOWN_ACCESSIBILITY_KEY_SET=t.POSITIONS=void 0,t.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},t.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],t.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],t.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],t.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],t.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],t.BREAKPOINTS={sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},821:(e,t)=>{
/*
 * HSBasePlugin
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n){this.el=e,this.options=t,this.events=n,this.el=e,this.options=t,this.events={}}return e.prototype.createCollection=function(e,t){var n;e.push({id:(null===(n=null==t?void 0:t.el)||void 0===n?void 0:n.id)||e.length+1,element:t})},e.prototype.fireEvent=function(e,t){if(void 0===t&&(t=null),this.events.hasOwnProperty(e))return this.events[e](t)},e.prototype.on=function(e,t){this.events[e]=t},e}();t.default=n},471:function(e,t,n){
/*
 * HSDropdown
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(280),l=n(170),c=s(n(821)),u=n(291),f=function(e){function t(t,n,o){var r=e.call(this,t,n,o)||this;return r.toggle=r.el.querySelector(":scope > .hs-dropdown-toggle")||r.el.querySelector(":scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle")||r.el.children[0],r.closers=Array.from(r.el.querySelectorAll(":scope .hs-dropdown-close"))||null,r.menu=r.el.querySelector(":scope > .hs-dropdown-menu"),r.eventMode=(0,a.getClassProperty)(r.el,"--trigger","click"),r.closeMode=(0,a.getClassProperty)(r.el,"--auto-close","true"),r.animationInProcess=!1,r.toggle&&r.menu&&r.init(),r}return r(t,e),t.prototype.init=function(){var e=this;if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle&&this.buildToggle(),this.menu&&this.buildMenu(),this.closers&&this.buildClosers(),(0,a.isIOS)()||(0,a.isIpadOS)()||(this.el.addEventListener("mouseenter",(function(){return e.onMouseEnterHandler()})),this.el.addEventListener("mouseleave",(function(){return e.onMouseLeaveHandler()})))},t.prototype.resizeHandler=function(){this.eventMode=(0,a.getClassProperty)(this.el,"--trigger","click"),this.closeMode=(0,a.getClassProperty)(this.el,"--auto-close","true")},t.prototype.buildToggle=function(){var e,t=this;(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.el.classList.contains("open")?this.toggle.ariaExpanded="true":this.toggle.ariaExpanded="false"),this.toggle.addEventListener("click",(function(e){return t.onClickHandler(e)}))},t.prototype.buildMenu=function(){this.menu.role="menu"},t.prototype.buildClosers=function(){var e=this;this.closers.forEach((function(t){t.addEventListener("click",(function(){return e.close()}))}))},t.prototype.onClickHandler=function(e){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()},t.prototype.onMouseEnterHandler=function(){if("hover"!==this.eventMode)return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()},t.prototype.onMouseLeaveHandler=function(){if("hover"!==this.eventMode)return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()},t.prototype.destroyPopper=function(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1},t.prototype.absoluteStrategyModifiers=function(){var e=this;return[{name:"applyStyles",fn:function(t){var n=(window.getComputedStyle(e.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),o=(window.getComputedStyle(e.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");t.state.elements.popper.style.position=n,t.state.elements.popper.style.transform="adaptive"===o?t.state.styles.popper.transform:null,t.state.elements.popper.style.top=null,t.state.elements.popper.style.bottom=null,t.state.elements.popper.style.left=null,t.state.elements.popper.style.right=null,t.state.elements.popper.style.margin=0}}]},t.prototype.open=function(){var e=this;if(this.el.classList.contains("open"))return!1;if(this.animationInProcess)return!1;this.animationInProcess=!0;var t=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),n=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),o=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),r=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ","")),s=(window.getComputedStyle(this.el).getPropertyValue("--gpu-acceleration")||"true").replace(" ","");"static"!==o&&(this.el._popper=(0,l.createPopper)(this.el,this.menu,{placement:u.POSITIONS[t]||"bottom-start",strategy:o,modifiers:i(i([],"fixed"!==o?this.absoluteStrategyModifiers():[],!0),[{name:"flip",enabled:"true"===n},{name:"offset",options:{offset:[0,r]}},{name:"computeStyles",options:{adaptive:"fixed"===o,gpuAcceleration:"true"===s}}],!1)})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout((function(){var t;(null===(t=null==e?void 0:e.toggle)||void 0===t?void 0:t.ariaExpanded)&&(e.toggle.ariaExpanded="true"),e.el.classList.add("open"),e.animationInProcess=!1})),this.fireEvent("open",this.el),(0,a.dispatch)("open.hs.dropdown",this.el,this.el)},t.prototype.close=function(e){var t=this;if(void 0===e&&(e=!0),this.animationInProcess||!this.el.classList.contains("open"))return!1;var n;if(this.animationInProcess=!0,e){var o=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,a.afterTransition)(o,(function(){return t.destroyPopper()}))}else this.destroyPopper();t.menu.style.margin=null,(null===(n=null==t?void 0:t.toggle)||void 0===n?void 0:n.ariaExpanded)&&(t.toggle.ariaExpanded="false"),t.el.classList.remove("open"),t.fireEvent("close",t.el),(0,a.dispatch)("close.hs.dropdown",t.el,t.el)},t.prototype.forceClearState=function(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")},t.getInstance=function(e,t){var n=window.$hsDropdownCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(e){if(void 0===e&&(e=null),!window.$hsDropdownCollection){window.$hsDropdownCollection=[],document.addEventListener("keydown",(function(e){return t.accessibility(e)})),window.addEventListener("click",(function(e){var n=e.target;t.closeCurrentlyOpened(n)}));var n=window.innerWidth;window.addEventListener("resize",(function(){window.innerWidth!==n&&(n=innerWidth,t.closeCurrentlyOpened(null,!1))}))}(e||document).querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach((function(e){window.$hsDropdownCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t.open=function(e){var t=window.$hsDropdownCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&t.element.menu.classList.contains("hidden")&&t.element.open()},t.close=function(e){var t=window.$hsDropdownCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));t&&!t.element.menu.classList.contains("hidden")&&t.element.close()},t.accessibility=function(e){this.history=a.menuSearchHistory;var t=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(t&&(u.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(e.code)||4===e.code.length&&e.code[e.code.length-1].match(/^[A-Z]*$/))&&!e.metaKey&&!t.element.menu.querySelector("input:focus")&&!t.element.menu.querySelector("textarea:focus"))switch(e.code){case"Escape":t.element.menu.querySelector(".hs-select.active")||(e.preventDefault(),this.onEscape(e));break;case"Enter":t.element.menu.querySelector(".hs-select button:focus")||t.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(e);break;case"ArrowUp":e.preventDefault(),e.stopImmediatePropagation(),this.onArrow();break;case"ArrowDown":e.preventDefault(),e.stopImmediatePropagation(),this.onArrow(!1);break;case"Home":e.preventDefault(),e.stopImmediatePropagation(),this.onStartEnd();break;case"End":e.preventDefault(),e.stopImmediatePropagation(),this.onStartEnd(!1);break;default:e.preventDefault(),this.onFirstLetter(e.key)}},t.onEscape=function(e){var t=e.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find((function(e){return e.element.el===t}))){var n=window.$hsDropdownCollection.find((function(e){return e.element.el===t}));n&&(n.element.close(),n.element.toggle.focus())}else this.closeCurrentlyOpened()},t.onEnter=function(e){var t=e.target.parentElement;if(window.$hsDropdownCollection.find((function(e){return e.element.el===t}))){e.preventDefault();var n=window.$hsDropdownCollection.find((function(e){return e.element.el===t}));n&&n.element.open()}},t.onArrow=function(e){void 0===e&&(e=!0);var t=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(t){var n=t.element.menu;if(!n)return!1;var o=(e?Array.from(n.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(n.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter((function(e){return!e.classList.contains("disabled")})),r=n.querySelector("a:focus, button:focus"),i=o.findIndex((function(e){return e===r}));i+1<o.length&&i++,o[i].focus()}},t.onStartEnd=function(e){void 0===e&&(e=!0);var t=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(t){var n=t.element.menu;if(!n)return!1;var o=(e?Array.from(n.querySelectorAll("a")):Array.from(n.querySelectorAll("a")).reverse()).filter((function(e){return!e.classList.contains("disabled")}));o.length&&o[0].focus()}},t.onFirstLetter=function(e){var t=this,n=window.$hsDropdownCollection.find((function(e){return e.element.el.classList.contains("open")}));if(n){var o=n.element.menu;if(!o)return!1;var r=Array.from(o.querySelectorAll("a")),i=function(){return r.findIndex((function(n,o){return n.innerText.toLowerCase().charAt(0)===e.toLowerCase()&&t.history.existsInHistory(o)}))},s=i();-1===s&&(this.history.clearHistory(),s=i()),-1!==s&&(r[s].focus(),this.history.addHistory(s))}},t.closeCurrentlyOpened=function(e,t){void 0===e&&(e=null),void 0===t&&(t=!0);var n=e&&e.closest(".hs-dropdown")&&e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null,o=n?window.$hsDropdownCollection.filter((function(e){return e.element.el.classList.contains("open")&&e.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===n})):window.$hsDropdownCollection.filter((function(e){return e.element.el.classList.contains("open")}));e&&e.closest(".hs-dropdown")&&"inside"===(0,a.getClassPropertyAlt)(e.closest(".hs-dropdown"),"--auto-close")&&(o=o.filter((function(t){return t.element.el!==e.closest(".hs-dropdown")}))),o&&o.forEach((function(e){if("false"===e.element.closeMode||"outside"===e.element.closeMode)return!1;e.element.close(t)}))},t.on=function(e,t,n){var o=window.$hsDropdownCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));o&&(o.element.events[e]=n)},t}(c.default);window.addEventListener("load",(function(){f.autoInit()})),window.addEventListener("resize",(function(){window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach((function(e){return e.element.resizeHandler()}))})),"undefined"!=typeof window&&(window.HSDropdown=f),t.default=f},280:function(e,t){var n=this;Object.defineProperty(t,"__esModule",{value:!0}),t.menuSearchHistory=t.classToClassList=t.htmlToElement=t.afterTransition=t.dispatch=t.debounce=t.isFormElement=t.isParentOrElementHidden=t.isEnoughSpace=t.isIpadOS=t.isIOS=t.getHighestZIndex=t.getZIndex=t.getClassPropertyAlt=t.getClassProperty=t.stringToBoolean=void 0;t.stringToBoolean=function(e){return"true"===e};t.getClassProperty=function(e,t,n){return void 0===n&&(n=""),(window.getComputedStyle(e).getPropertyValue(t)||n).replace(" ","")};t.getClassPropertyAlt=function(e,t,n){void 0===n&&(n="");var o="";return e.classList.forEach((function(e){e.includes(t)&&(o=e)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n};var o=function(e){return window.getComputedStyle(e).getPropertyValue("z-index")};t.getZIndex=o,t.getHighestZIndex=function(e){var t=Number.NEGATIVE_INFINITY;return e.forEach((function(e){var n=o(e);"auto"!==n&&(n=parseInt(n,10))>t&&(t=n)})),t};t.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};t.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};t.isEnoughSpace=function(e,t,n,o,r){void 0===n&&(n="auto"),void 0===o&&(o=10),void 0===r&&(r=null);var i=t.getBoundingClientRect(),s=r?r.getBoundingClientRect():null,a=window.innerHeight,l=s?i.top-s.top:i.top,c=(r?s.bottom:a)-i.bottom,u=e.clientHeight+o;return"bottom"===n?c>=u:"top"===n?l>=u:l>=u||c>=u};t.isFormElement=function(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement};var r=function(e){return!!e&&("none"===window.getComputedStyle(e).display||r(e.parentElement))};t.isParentOrElementHidden=r;t.debounce=function(e,t){var o;return void 0===t&&(t=200),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(o),o=setTimeout((function(){e.apply(n,r)}),t)}};t.dispatch=function(e,t,n){void 0===n&&(n=null);var o=new CustomEvent(e,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(o)};t.afterTransition=function(e,t){var n=function(){t(),e.removeEventListener("transitionend",n,!0)},o=window.getComputedStyle(e),r=o.getPropertyValue("transition-duration");"none"!==o.getPropertyValue("transition-property")&&parseFloat(r)>0?e.addEventListener("transitionend",n,!0):t()};t.htmlToElement=function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild};t.classToClassList=function(e,t,n,o){void 0===n&&(n=" "),void 0===o&&(o="add"),e.split(n).forEach((function(e){return"add"===o?t.classList.add(e):t.classList.remove(e)}))};t.menuSearchHistory={historyIndex:-1,addHistory:function(e){this.historyIndex=e},existsInHistory:function(e){return e>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(471)})()));