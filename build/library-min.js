function X(d){var a={};a.selector=d;a.element=document.querySelector(a.selector);a.attr=function(b,c){if(!c)return a.element.getAttribute(b);a.element.setAttribute(b,c);return a};a.camelCase=function(a){return a.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)};a.clearattr=function(b){a.element.setAttribute(b," ");return a};a.css=function(b){var c=a.element.getAttribute("style");null!=c?a.element.setAttribute("style",c+b):a.element.setAttribute("style",b)};a.error=function(a){throw Error(a);
};a.eval=function(a){try{return eval(a)}catch(c){return""}};a.html=function(){return a.element};a.isNumeric=function(a){return!a.isArray&&0<=a-parseFloat(a)+1};a.on=function(b,c){a.element["on"+b]=c;return a};a.value=function(b){if(!b)return a.element.innerHTML;a.element.innerHTML=b;return a};return a};
