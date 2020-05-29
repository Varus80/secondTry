//toggle between 2 classes


document.querySelector('img').addEventListener("click",function(e){
 
    

    if(document.querySelector('.hello')){
        document.querySelector('.hello').className = "options";
    }
    else{
        document.querySelector('.options').className = "hello";
    }



});




