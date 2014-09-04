self.attr = function (name, value) {
        if(!value) return self.element.getAttribute(name);
        self.element.setAttribute(name, value);
        return self;
    };