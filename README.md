chemX
=====

The chemX library is a light jquery like dom manuipilation library.

Example

<html>
<head>
    <script src="chemX.js" type="text/javascript"></script>
</head>
<body>
<div title="yoooooo" id="xad" style="font-family: arial; color: #fff;"></div>  
    
    <script>
            console.log(X('#xad').attr('title','yooo').html());
        
            X('#xad').value("ಠ");
            X('#xad').css('font-size: 128px;');
        
            X("body").css('background-color: #000;');
            var ds = 0;
    
            X('#xad').on('click', function(event){
            var colors = ["red","orange","yellow","green","blue","purple"];
        
            if(ds < 5){
                ds = ds + 1;   
                X('#xad').clearattr("style");
                X('#xad').css('color: ' + colors[ds] + ';' + "font-family: arial; font-size: 128px;");
            }
        
            else{
                ds = 0; 
                X('#xad').css('color: ' + colors[ds] + ';');
            }
            })
    </script>
</body>
</html>


TO BUILD
=======
Go into root directory and run "grunt -force"
