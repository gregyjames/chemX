//Greg James
//ChemX Libary 
//Version 0.0.1.0 alpha

function X(selector) {
    var self = {};
    
    self.selector = selector;
    
    self.element = document.querySelector(self.selector);self.attr = function (name, value) {
        if(!value) return self.element.getAttribute(name);
        self.element.setAttribute(name, value);
        return self;
    };self.camelCase = function (string) {
     return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
};self.clearattr = function (name) {
        self.element.setAttribute(name, " ");
        return self;
    };self.css = function (value){
        var current = self.element.getAttribute('style');
        
        if (current != null){
        self.element.setAttribute('style', current + value);
        }
        else{
        self.element.setAttribute('style', value); 
        }
    };self.error = function (msg) {
     throw new Error(msg);
};self.eval = function (v) {
     try {
        return eval(v);
    } catch(e) {
        return ""
    }
};self.html = function () {
		return self.element;
	};self.isNumeric = function (obj) {
     return !obj.isArray && (obj - parseFloat(obj) + 1) >= 0;
};self.on = function (type, callback) {
        self.element['on' + type] = callback;
        return self;
    };self.value = function (text) {
        if(!text) return self.element.innerHTML;
        self.element.innerHTML = text;
        return self;
    };return self;
};