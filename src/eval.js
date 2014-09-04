self.eval = function (v) {
     try {
        return eval(v);
    } catch(e) {
        return ""
    }
};