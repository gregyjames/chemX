self.isNumeric = function (obj) {
     return !obj.isArray && (obj - parseFloat(obj) + 1) >= 0;
};