self.value = function (text) {
        if(!text) return self.element.innerHTML;
        self.element.innerHTML = text;
        return self;
    };