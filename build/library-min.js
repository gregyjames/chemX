function X(d){var a={};a.selector=d;a.element=document.querySelector(a.selector);a.attr=function(b,c){if(!c)return a.element.getAttribute(b);a.element.setAttribute(b,c);return a};a.clearattr=function(b){a.element.setAttribute(b," ");return a};a.css=function(b){var c=a.element.getAttribute("style");null!=c?a.element.setAttribute("style",c+b):a.element.setAttribute("style",b)};a.html=function(){return a.element};a.value=function(b){if(!b)return a.element.innerHTML;a.element.innerHTML=b;return a};return a}
;
