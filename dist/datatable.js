!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(()=>(()=>{"use strict";var t={821:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},562:function(t,e,n){
/*
 * HSDataTable
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var i,o=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return a=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},l=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var i,o=0,a=e.length;o<a;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(280),c=function(t){function e(e,n,i){var o,r,s,c,d,u,p,g,h,f,v,y,b,m,S,w,P,T,x,E,C,I,O,A,L,_=t.call(this,e,n,i)||this;_.el="string"==typeof e?document.querySelector(e):e;var q=[];Array.from(_.el.querySelectorAll("thead th, thead td")).forEach((function(t,e){t.classList.contains("--exclude-from-ordering")&&q.push({targets:e,orderable:!1})}));var H=_.el.getAttribute("data-hs-datatable"),k=H?JSON.parse(H):{};return _.concatOptions=a(a({searching:!0,lengthChange:!1,order:[],columnDefs:l([],q,!0)},k),n),_.table=_.el.querySelector("table"),_.search=null!==(o=_.el.querySelector("[data-hs-datatable-search]"))&&void 0!==o?o:null,_.pageEntities=null!==(r=_.el.querySelector("[data-hs-datatable-page-entities]"))&&void 0!==r?r:null,_.paging=null!==(s=_.el.querySelector("[data-hs-datatable-paging]"))&&void 0!==s?s:null,_.pagingPrev=null!==(c=_.el.querySelector("[data-hs-datatable-paging-prev]"))&&void 0!==c?c:null,_.pagingNext=null!==(d=_.el.querySelector("[data-hs-datatable-paging-next]"))&&void 0!==d?d:null,_.pagingPages=null!==(u=_.el.querySelector("[data-hs-datatable-paging-pages]"))&&void 0!==u?u:null,_.info=null!==(p=_.el.querySelector("[data-hs-datatable-info]"))&&void 0!==p?p:null,_.infoFrom=null!==(g=_.el.querySelector("[data-hs-datatable-info-from]"))&&void 0!==g?g:null,_.infoTo=null!==(h=_.el.querySelector("[data-hs-datatable-info-to]"))&&void 0!==h?h:null,_.infoLength=null!==(f=_.el.querySelector("[data-hs-datatable-info-length]"))&&void 0!==f?f:null,(null===(v=_.concatOptions)||void 0===v?void 0:v.rowSelectingOptions)&&(_.rowSelectingAll=null!==(w=(null===(b=null===(y=_.concatOptions)||void 0===y?void 0:y.rowSelectingOptions)||void 0===b?void 0:b.selectAllSelector)?document.querySelector(null===(S=null===(m=_.concatOptions)||void 0===m?void 0:m.rowSelectingOptions)||void 0===S?void 0:S.selectAllSelector):document.querySelector("[data-hs-datatable-row-selecting-all]"))&&void 0!==w?w:null),(null===(P=_.concatOptions)||void 0===P?void 0:P.rowSelectingOptions)&&(_.rowSelectingIndividual=null!==(C=null!==(E=null===(x=null===(T=_.concatOptions)||void 0===T?void 0:T.rowSelectingOptions)||void 0===x?void 0:x.individualSelector)&&void 0!==E?E:"[data-hs-datatable-row-selecting-individual]")&&void 0!==C?C:null),_.pageEntities&&(_.concatOptions.pageLength=parseInt(_.pageEntities.value)),_.maxPagesToShow=3,_.isRowSelecting=!!(null===(I=_.concatOptions)||void 0===I?void 0:I.rowSelectingOptions),_.pageBtnClasses=null!==(L=null===(A=null===(O=_.concatOptions)||void 0===O?void 0:O.pagingOptions)||void 0===A?void 0:A.pageBtnClasses)&&void 0!==L?L:null,_.init(),_}return o(e,t),e.prototype.init=function(){this.createCollection(window.$hsDataTableCollection,this),this.initTable(),this.search&&this.initSearch(),this.pageEntities&&this.initPageEntities(),this.paging&&this.initPaging(),this.pagingPrev&&this.initPagingPrev(),this.pagingNext&&this.initPagingNext(),this.pagingPages&&this.buildPagingPages(),this.info&&this.initInfo(),this.isRowSelecting&&this.initRowSelecting()},e.prototype.initTable=function(){var t=this;this.dataTable=new DataTable(this.table,this.concatOptions),this.isRowSelecting&&this.triggerChangeEventToRow(),this.dataTable.on("draw",(function(){t.isRowSelecting&&t.updateSelectAllCheckbox(),t.isRowSelecting&&t.triggerChangeEventToRow(),t.updateInfo(),t.updatePaging()}))},e.prototype.initSearch=function(){var t=this;this.search.addEventListener("input",(0,s.debounce)((function(e){return t.onSearchInput(e.target.value)})))},e.prototype.onSearchInput=function(t){this.dataTable.search(t).draw()},e.prototype.initPageEntities=function(){var t=this;this.pageEntities.addEventListener("change",(function(e){return t.onEntitiesChange(parseInt(e.target.value))}))},e.prototype.onEntitiesChange=function(t){this.dataTable.page.len(t).draw()},e.prototype.initInfo=function(){this.infoFrom&&this.initInfoFrom(),this.infoTo&&this.initInfoTo(),this.infoLength&&this.initInfoLength()},e.prototype.initInfoFrom=function(){var t=this.dataTable.page.info().start;this.infoFrom.innerText="".concat(t+1)},e.prototype.initInfoTo=function(){var t=this.dataTable.page.info().end;this.infoTo.innerText="".concat(t)},e.prototype.initInfoLength=function(){var t=this.dataTable.page.info().recordsTotal;this.infoLength.innerText="".concat(t)},e.prototype.updateInfo=function(){this.initInfo()},e.prototype.initPaging=function(){this.hidePagingIfSinglePage()},e.prototype.hidePagingIfSinglePage=function(){this.dataTable.page.info().pages<2?(this.paging.classList.add("hidden"),this.paging.style.display="none"):(this.paging.classList.remove("hidden"),this.paging.style.display="")},e.prototype.initPagingPrev=function(){var t=this;this.pagingPrev.addEventListener("click",(function(){t.onPrevClick()}))},e.prototype.onPrevClick=function(){this.dataTable.page("previous").draw("page")},e.prototype.disablePagingArrow=function(t,e){e?(t.classList.add("disabled"),t.setAttribute("disabled","disabled")):(t.classList.remove("disabled"),t.removeAttribute("disabled"))},e.prototype.initPagingNext=function(){var t=this;this.pagingNext.addEventListener("click",(function(){t.onNextClick()}))},e.prototype.onNextClick=function(){this.dataTable.page("next").draw("page")},e.prototype.buildPagingPages=function(){this.updatePaging()},e.prototype.updatePaging=function(){var t=this.dataTable.page.info(),e=t.page,n=t.pages,i=t.length,o=this.dataTable.rows({search:"applied"}).count(),a=Math.ceil(o/i),l=e+1,r=Math.max(1,l-Math.floor(this.maxPagesToShow/2)),c=Math.min(a,r+(this.maxPagesToShow-1));c-r+1<this.maxPagesToShow&&(r=Math.max(1,c-this.maxPagesToShow+1)),this.pagingPages.innerHTML="",r>1&&(this.buildPagingPage(1),r>2&&this.pagingPages.appendChild((0,s.htmlToElement)('<span class="ellipsis">...</span>')));for(var d=r;d<=c;d++)this.buildPagingPage(d);c<a&&(c<a-1&&this.pagingPages.appendChild((0,s.htmlToElement)('<span class="ellipsis">...</span>')),this.buildPagingPage(a)),this.disablePagingArrow(this.pagingPrev,0===e),this.disablePagingArrow(this.pagingNext,e===n-1),this.hidePagingIfSinglePage()},e.prototype.buildPagingPage=function(t){var e=this,n=this.dataTable.page.info().page,i=(0,s.htmlToElement)('<button type="button"></button>');i.innerText="".concat(t),i.setAttribute("data-page","".concat(t)),this.pageBtnClasses&&(0,s.classToClassList)(this.pageBtnClasses,i),n===t-1&&i.classList.add("active"),i.addEventListener("click",(function(){return e.onPageClick(t)})),this.pagingPages.append(i)},e.prototype.onPageClick=function(t){this.dataTable.page(t-1).draw("page")},e.prototype.initRowSelecting=function(){var t=this;this.rowSelectingAll.addEventListener("change",(function(){return t.onSelectAllChange()}))},e.prototype.triggerChangeEventToRow=function(){var t=this;this.table.querySelectorAll("tbody ".concat(this.rowSelectingIndividual)).forEach((function(e){e.addEventListener("change",(function(){t.updateSelectAllCheckbox()}))}))},e.prototype.onSelectAllChange=function(){var t=this,e=this.rowSelectingAll.checked;Array.from(this.dataTable.rows({page:"current",search:"applied"}).nodes()).forEach((function(n){var i=n.querySelector(t.rowSelectingIndividual);i&&(i.checked=e)})),this.updateSelectAllCheckbox()},e.prototype.updateSelectAllCheckbox=function(){var t=this;if(!this.dataTable.rows({search:"applied"}).count())return this.rowSelectingAll.checked=!1,!1;var e=!0;Array.from(this.dataTable.rows({page:"current",search:"applied"}).nodes()).forEach((function(n){var i=n.querySelector(t.rowSelectingIndividual);if(i&&!i.checked)return e=!1,!1})),this.rowSelectingAll.checked=e},e.getInstance=function(t,e){var n=window.$hsDataTableCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element.el:null},e.autoInit=function(t){void 0===t&&(t=null),window.$hsDataTableCollection||(window.$hsDataTableCollection=[]),(t||document).querySelectorAll("[data-hs-datatable]:not(.--prevent-on-load-init)").forEach((function(t){window.$hsDataTableCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e}(r(n(821)).default);window.addEventListener("load",(function(){document.querySelectorAll("[data-hs-datatable]:not(.--prevent-on-load-init)").length&&("undefined"==typeof jQuery&&console.error("HSDataTable: jQuery is not available, please add it to the page."),"undefined"==typeof DataTable&&console.error("HSDataTable: DataTable is not available, please add it to the page.")),"undefined"!=typeof DataTable&&"undefined"!=typeof jQuery&&c.autoInit()})),"undefined"!=typeof window&&(window.HSDataTable=c),e.default=c},280:function(t,e){var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getHighestZIndex=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var i="";return t.classList.forEach((function(t){t.includes(e)&&(i=t)})),i.match(/:(.*)]/)?i.match(/:(.*)]/)[1]:n};var i=function(t){return window.getComputedStyle(t).getPropertyValue("z-index")};e.getZIndex=i,e.getHighestZIndex=function(t){var e=Number.NEGATIVE_INFINITY;return t.forEach((function(t){var n=i(t);"auto"!==n&&(n=parseInt(n,10))>e&&(e=n)})),e};e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isEnoughSpace=function(t,e,n,i,o){void 0===n&&(n="auto"),void 0===i&&(i=10),void 0===o&&(o=null);var a=e.getBoundingClientRect(),l=o?o.getBoundingClientRect():null,r=window.innerHeight,s=l?a.top-l.top:a.top,c=(o?l.bottom:r)-a.bottom,d=t.clientHeight+i;return"bottom"===n?c>=d:"top"===n?s>=d:s>=d||c>=d};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var o=function(t){return!!t&&("none"===window.getComputedStyle(t).display||o(t.parentElement))};e.isParentOrElementHidden=o;e.debounce=function(t,e){var i;return void 0===e&&(e=200),function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];clearTimeout(i),i=setTimeout((function(){t.apply(n,o)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var i=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(i)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)},i=window.getComputedStyle(t),o=i.getPropertyValue("transition-duration");"none"!==i.getPropertyValue("transition-property")&&parseFloat(o)>0?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,i){void 0===n&&(n=" "),void 0===i&&(i="add"),t.split(n).forEach((function(t){return"add"===i?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}(562);return n})()));