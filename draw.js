$(function(){
    
    
    $.draw = function(collpse){
        
        
        $("#Size td").click(function(){
            $(this).css("background-color",""+color+"");  
        })
        
        
        $("#Size td").mouseover(function(e){        //si la souris passe par dessus
            if(e.shiftKey)  //si la touche shift est enfoncer
            {
                $(this).css("background-color",""+color+"");    
            }
        })
        
        $("#bordure").click(function(){        //enleve ou ajoute la bordure
            if(collpse == false)
            {
                $("#Size td").each(function(a, td){
                    $(td).css("border","none");
                })
                collpse = true;
            }else
            {
                $("#Size td").each(function(a, td){
                    $(td).css("border","solid 0.5px darkGray");
                })
                collpse = false;
            }      
        })
    }
    

    
})