self.on = function (type, callback) {
        self.element['on' + type] = callback;
        return self;
    };