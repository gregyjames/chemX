self.css = function (value){
        var current = self.element.getAttribute('style');
        
        if (current != null){
        self.element.setAttribute('style', current + value);
        }
        else{
        self.element.setAttribute('style', value); 
        }
    };